const express = require('express');
const AWS = require("aws-sdk");
const app = express();

// app.use(express.json());
const cred = new AWS.SharedIniFileCredentials({profile: 'default'});
const sns = new AWS.SNS({cred, region:'ap-southeast-1'});

var params ={
    Subject:"test",
    Message:"123,1.23,234.1",
    TopicArn:"arn:aws:sns:ap-southeast-1:695137441790:TrackMate-LocationData",
}
sns.publish(params,(err,data)=>{
    if(err) console.error(err)
})



// app.listen(5000,()=>{
//     console.log('SNS app listening on port 5000')
// })