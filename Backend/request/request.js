// request/create-request  {postid, userid}
// request/all-request  // to get all the request for a particular post {postid}
// request/update-request  // to change the status of the request here, may need to change the status of the post also if the max no. of participent limit reaches so made the status of the post to closed and also remove all the request form the request array of the post and also all the request in that post which are pending in that post
// post to completed

const requestSchema =  require('./request.model')
const postSchema = require('../post/post.model')

exports.createRequestMiddleware = async (req, res, next) => {
    const {postid, userid} = req.body;
    const newRequest = new requestSchema({postId:postid, userId:userid});
    try {
        const savedRequest = await newRequest.save();
        postSchema.findOne
        ({
            _id: postid
        }).then((post) => {
            post.requests.push(savedRequest._id);
            post.save();
            res.status(201).json(savedRequest);
        })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        })

        
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

exports.allRequestMiddleware = async (req, res, next) => {
    const {postid} = req.body;
    try {
        const allRequest = await requestSchema.find
        ({
            postid: postid
        });
        res.status(201).json(allRequest);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

exports.updateRequestMiddleware = async (req, res, next) => {
    const {postid,reqid, status} = req.body;
    try {
        
        const updatedRequest = await requestSchema.updateOne
        ({
            postid: postid,
            _id: reqid,
        },
        {
            status: status
        })
        if (status == "accepted")
        {
            let len =
            await postSchema.find({ _id: postid }).then((post) => {
                return post.nMem
            })
            .catch((err) => {
                res.status(400).json({ message: err.message });
            })

            requestSchema.find
            ({
                postId: postid,
                status: "accepted"
            }).then((requests) => {

                if (requests.length == len)
                {
                    postSchema.findOne
                    ({
                        _id: postid
                    }).then((post) => {
                        post.status = "closed";
                        post.save();
                        res.status(201).json({ message: "Request updated successfully:"+updatedRequest  });
                    })
                    .catch((err) => {
                        res.status(400).json({ message: err.message });
                    })
                }
                else
                {
                    res.status(201).json({ message: "Request updated successfully:",updatedRequest  });
                }
            })
            .catch((err) => {
                res.status(400).json({ message: err.message });
            })
        }
        else{
            res.status(201).json({ message: "Request updated successfully:",
            request:updatedRequest  })
        }
        // res.status(201).json(updatedRequest)
        
        // res.status(201).json({ message: "Request updated successfully:"+updatedRequest  })
        // res.status(201).json({ message: "Request updated successfully:"+updatedRequest  })

        
        
        ;
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

// {
//     "postid": "63ccdb5660d1795b840872ed",
// "userid":"63cd088078f9fd6a0b68a797"
// }
// 
// 