Feature('Sistema de cadastro da Pet Store');

const { validation_api, jsonSchema } = inject()
const name = require('../Utils/name')
const number = require('../Utils/number')

const firstName = name.getFirstName()
const fullName = name.getFullName()
const numberId = number.getNumberId()
const numberCategory = number.getNumberCategory()
const numberTags = number.getNumberTags()

Scenario('Cadastro de Pet', async ({ I }) => {
    const responsePost = await I.sendPostRequest(`/v2/pet`, {
        id: numberId,
        category: {id: numberCategory,name: 'Cachorro'},
        name: firstName,
        photoUrls: ['photoURL'],
        tags: [{id: numberTags,name: fullName}],
        status: 'available'
    }, {
        'Content-type': 'application/json; charset=UTF-8',
    })

    validation_api.validationStatus(200);
    validation_api.dontSeeCode(500);
    validation_api.validateTimeout(1000);
    jsonSchema.complexJsonStructuresPOST();
    jsonSchema.containsKeysPOST();
    validation_api.responseCallBackPOST();

    I.seeResponseContainsJson({
        id: numberId,
        category: {id: numberCategory,name: 'Cachorro'},
        name: firstName,
        photoUrls: ['photoURL'],
        tags: [{id: numberTags,name: fullName}],
        status: 'available'
    })
    
    // console.log(responsePost)
});

Scenario('Atualização do cadastro do Pet', async ({ I }) => {
    const responsePut = await I.sendPutRequest(`/v2/pet`, {
        id: numberId,
        category: {id: numberCategory,name: 'Cat'},
        name: firstName,
        photoUrls: ['photoURL'],
        tags: [{id: numberTags,name: fullName}],
        status: 'unavailable'
    }, {
        'Content-type': 'application/json; charset=UTF-8',
    })

    validation_api.validationSuccessfulStatus();
    validation_api.dontSeeCode(422);
    validation_api.validateTimeout(1000);
    jsonSchema.complexJsonStructuresPOST();
    jsonSchema.containsKeysPOST();
    validation_api.responseCallBackPOST();
    
    I.seeResponseContainsJson({
        id: numberId,
        category: {id: numberCategory,name: 'Cat'},
        name: firstName,
        photoUrls: ['photoURL'],
        tags: [{id: numberTags,name: fullName}],
        status: 'unavailable'
    })

    // console.log(responsePut)
});

Scenario('Consulta do cadastro do Pet', async ({ I }) => {
    const payloadGet = await I.sendGetRequest(`/v2/pet/` + numberId)

    validation_api.validationSuccessfulStatus();
    validation_api.dontSeeCode(404);
    validation_api.validateTimeout(1000);
    jsonSchema.complexJsonStructuresPOST();
    jsonSchema.containsKeysPOST();
    validation_api.responseCallBackPOST();

    I.seeResponseContainsJson({
        id: numberId,
        category: {id: numberCategory,name: 'Cat'},
        name: firstName,
        photoUrls: ['photoURL'],
        tags: [{id: numberTags,name: fullName}],
        status: 'unavailable'
    })
    
    // console.log(payloadGet)
});

Scenario('Exclusão do cadastro do Pet', async ({ I }) => {
    const payloadDelete = await I.sendDeleteRequest(`/v2/pet/` + numberId)

    validation_api.validationStatus(200);
    validation_api.dontSeeCode(500);
    validation_api.validateTimeout(1000);
    validation_api.responseCallBackDELETE();
    jsonSchema.complexJsonStructuresDELETE();
    
    I.seeResponseContainsJson({
        code: 200,
        type: 'unknown',
        message: numberId.toString(),
    })
    
    // console.log(payloadDelete)
});