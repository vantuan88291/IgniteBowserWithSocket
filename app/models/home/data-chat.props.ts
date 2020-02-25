import {Instance, types} from "mobx-state-tree"

export const ChatDataModel = types.model().props({
  id: types.maybeNull(types.number),
  name: types.maybeNull(types.string),
  message: types.maybeNull(types.string),
})
export type UserSearchModelType = Instance<typeof ChatDataModel>
