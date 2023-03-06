Feature('Sistema de cadastro da Pet Store');

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

    I.seeResponseCodeIs(200);
    I.dontSeeResponseCodeIs(500);
    I.setRequestTimeout(1000);

    I.seeResponseMatchesJsonSchema(joi => {
        return joi.object({
          id: joi.number().integer().min(1).max(999).required(),
          category: joi.object({
            id: joi.number().integer().min(1).max(999).required(),
            name: joi.string().trim().required(),
          }),
          name: joi.string().trim().required(),
          photoUrls: joi.array().required(),
          tags: joi.array().required(),
          status: joi.string().trim().required(),
        })
      });

    I.seeResponseContainsJson({
        id: numberId,
        category: {id: numberCategory,name: 'Cachorro'},
        name: firstName,
        photoUrls: ['photoURL'],
        tags: [{id: numberTags,name: fullName}],
        status: 'available'
    })
    
    I.seeResponseValidByCallback(({ data, status, expect }) => {
        expect(status).to.eql(200)
        expect(data.id)
        expect(data.category)
        expect(data.category.id)
        expect(data.category.name)
        expect(data.name)
        expect(data.photoUrls)
        expect(data.tags)
        expect(data.tags.id)
        expect(data.tags.name)
        expect(data.status)
    });
    
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

    I.seeResponseCodeIsSuccessful();
    I.dontSeeResponseCodeIs(422);
    I.setRequestTimeout(1000);

    I.seeResponseContainsKeys(['id']);
    I.seeResponseContainsKeys(['category']);
    I.seeResponseContainsKeys(['name']);
    I.seeResponseContainsKeys(['photoUrls']);
    I.seeResponseContainsKeys(['tags']);
    I.seeResponseContainsKeys(['status']);

    I.seeResponseContainsJson({
        id: numberId,
        category: {id: numberCategory,name: 'Cat'},
        name: firstName,
        photoUrls: ['photoURL'],
        tags: [{id: numberTags,name: fullName}],
        status: 'unavailable'
    })
    
    I.seeResponseValidByCallback(({ data, status, expect }) => {
        expect(status).to.eql(200)
        expect(data.id)
        expect(data.category)
        expect(data.category.id)
        expect(data.category.name)
        expect(data.name)
        expect(data.photoUrls)
        expect(data.tags)
        expect(data.tags.id)
        expect(data.tags.name)
        expect(data.status)
    });

    // console.log(responsePut)
});

Scenario('Consulta do cadastro do Pet', async ({ I }) => {
    const payloadGet = await I.sendGetRequest(`/v2/pet/` + numberId)

    I.seeResponseCodeIsSuccessful();
    I.dontSeeResponseCodeIs(404);
    I.setRequestTimeout(1000);

    I.seeResponseContainsKeys(['id']);
    I.seeResponseContainsKeys(['category']);
    I.seeResponseContainsKeys(['name']);
    I.seeResponseContainsKeys(['photoUrls']);
    I.seeResponseContainsKeys(['tags']);
    I.seeResponseContainsKeys(['status']);

    I.seeResponseContainsJson({
        id: numberId,
        category: {id: numberCategory,name: 'Cat'},
        name: firstName,
        photoUrls: ['photoURL'],
        tags: [{id: numberTags,name: fullName}],
        status: 'unavailable'
    })
    
    I.seeResponseValidByCallback(({ data, status, expect }) => {
        expect(status).to.eql(200)
        expect(data.id)
        expect(data.category)
        expect(data.category.id)
        expect(data.category.name)
        expect(data.name)
        expect(data.photoUrls)
        expect(data.tags)
        expect(data.tags.id)
        expect(data.tags.name)
        expect(data.status)
    });

    // console.log(payloadGet)
});

Scenario('Exclusão do cadastro do Pet', async ({ I }) => {
    const payloadDelete = await I.sendDeleteRequest(`/v2/pet/` + numberId)

    I.seeResponseCodeIs(200);
    I.dontSeeResponseCodeIs(500);
    I.setRequestTimeout(1000);

    I.seeResponseMatchesJsonSchema(joi => {
        return joi.object({
          code: joi.number().integer().min(200).max(200).required(),
          type: joi.string().trim().required(),
          message: joi.string().trim().required(),
        })
      });

    I.seeResponseContainsJson({
        code: 200,
        type: 'unknown',
        message: numberId.toString(),
    })
    
    I.seeResponseValidByCallback(({ data, status, expect }) => {
        expect(status).to.eql(200)
        expect(data.code)
        expect(data.type)
        expect(data.message)
    });

    // console.log(payloadDelete)
});