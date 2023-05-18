import boto3

def start_state_machine(input_data):
    client = boto3.client('stepfunctions')
    response = client.start_execution(
        stateMachineArn='arn:aws:iam::760692866489:role/Sysadmin ',
        input=json.dumps(input_data)
    )
    execution_arn = response['executionArn']
    return execution_arn

def lambda_handler(event, context):
    # Your code to process the user input goes here
    input_data = {"input": "your input here"}

    # Start the state machine
    execution_arn = start_state_machine(input_data)

    # Return a response to the user
    response = {
        "statusCode": 200,
        "body": json.dumps({
            "message": "State machine started",
            "executionArn": execution_arn
        })
    }

    return response
