import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'
import 'source-map-support/register'
import { createTodo } from '../../businessLayer/todosBusinessLayer'

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {

  const newTodo = await createTodo(event)

  return {
    statusCode: 201,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      item: newTodo
    })

  }

}
