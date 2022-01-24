import { APIGatewayProxyHandler } from "aws-lambda";
import * as dayjs from "dayjs";
import { document } from "../utils/dynamodbClient";

interface ICreateTodo {
    id: string;
    title: string;
    deadline: Date;
}

export const handle: APIGatewayProxyHandler = async (event) => {
    const { user_id } = event.pathParameters;
    const { id, title, deadline } = JSON.parse(event.body) as ICreateTodo;

    const response = await document.query({
        TableName: "todo",
        KeyConditionExpression: "id = :id",
        ExpressionAttributeValues: {
            ":id": id
        }
    }).promise()

    const todoAlreadyExists = response.Items[0];
 
    if (!todoAlreadyExists) {
        await document.put({
            TableName: "todo",
            Item: {
                id,
                user_id,
                title,
                done: false,
                deadline: dayjs(deadline).format("DD/MM/YYYY"),
            }
        }).promise();

        return {
            statusCode: 201,
            body: JSON.stringify({
                message: "Todo created",
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }
    }
    return {
        statusCode: 400,
        body: JSON.stringify({
            massage: "Todo already exists!"
        })
    }
}