import { RouteInitializer, MockSrvRouter, json } from 'ng2-mock-server/src';

const signInResponse = {
    "token":
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJp",
    "user": {
        "id": "34c12b02-49a2-4dba-bf74-6d421ea75a8f",
        "username": "naveen",
        "email": "naveen@gmail.com",
        "authtype": "plain",
        "firstname": "naveen",
        "lastname": "kumar"
    }
}

const signUpResponse = {
    "message": "A verification mail has been sent to your registered mail."
}

export class MockRouteInitializer implements RouteInitializer {

    initialize(mockRouter: MockSrvRouter): void {
        
        mockRouter.post("/user/login", (req: any, params) => {
            return json(200, signInResponse);
        })

        mockRouter.post("/user/register", (req: any, params) => {
            return json(200, signUpResponse);
        })
    }
}