const {DynamoDB} = require('@aws-sdk/client-dynamodb');
const {marshall} = require('@aws-sdk/util-dynamodb');

const db = new DynamoDB({
    region: "ap-southeast-1",
})

exports.handler = async (event) => {
    try{
        const {Item: item} = await db.putItem({
            TableName: 'users',
            Item: {
                id: marshall('3'),
                username: marshall('user3'),
            }
        })
        console.log(item);
    } catch (error) {
        console.log(error)
    }

    return {
        statusCode: 200,
        body: JSON.stringify("Hello from Lambda")
    }
}