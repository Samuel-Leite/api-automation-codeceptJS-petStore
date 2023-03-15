const { I } = inject()
const name = require('../Utils/name')
const number = require('../Utils/number')

const firstName = name.getFirstName()
const fullName = name.getFullName()
const numberId = number.getNumberId()
const numberCategory = number.getNumberCategory()
const numberTags = number.getNumberTags()

const payload = require('../resource/data/payload.json')

Given('that the user registers the Pet', async () => {
  const responsePost = await I.sendPostRequest(
    `/v2/pet`,
    payload,
    (payload.id = numberId),
    (payload.category.id = numberCategory),
    (payload.name = firstName),
    (payload.tags.id = numberTags),
    (payload.tags.name = fullName),
    {
      'Content-type': 'application/json; charset=UTF-8'
    }
  )

  // console.log(responsePost)
})

When('the user updates the Pets registration', async () => {
  const responsePut = await I.sendPutRequest(
    `/v2/pet`,
    {
      id: numberId,
      category: { id: numberCategory, name: 'Cat' },
      name: firstName,
      photoUrls: ['photoURL'],
      tags: [{ id: numberTags, name: fullName }],
      status: 'unavailable'
    },
    {
      'Content-type': 'application/json; charset=UTF-8'
    }
  )

  // console.log(responsePut)
})

When('the user deletes the Pets record', async () => {
  const payloadDelete = await I.sendDeleteRequest(`/v2/pet/` + numberId)

  // console.log(payloadDelete)
})

Then('the pet query will reflect', async () => {
  const payloadGet = await I.sendGetRequest(`/v2/pet/` + numberId)

  // console.log(payloadGet)
})
