import { HomeModel, Home } from "./home"

test("can be created", () => {
  const instance: Home = HomeModel.create({})

  expect(instance).toBeTruthy()
})