import { Instance, SnapshotOut, types } from "mobx-state-tree"
import {emitSocket} from "../../utils/socket-service";
import {ChatDataModel} from "./data-chat.props";

/**
 * Model description here for TypeScript hints.
 */
export const HomeModel = types
  .model("Home")
  .props({
    dataChat: types.optional(types.array(ChatDataModel), []),
  })
  .views(self => ({
    get getData(){
      return self.dataChat
    }
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({
    getAllMessage: () => {
      emitSocket("getAllData")
    },
    getNewMessage: (data) => {
      console.log('in new msg', data)
      self.dataChat.push(data)
    },
    setDataChat: (data) => {
      console.log('in all msg', data)

      self.dataChat.replace(data)
    }
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

  /**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type HomeType = Instance<typeof HomeModel>
export interface Home extends HomeType {}
type HomeSnapshotType = SnapshotOut<typeof HomeModel>
export interface HomeSnapshot extends HomeSnapshotType {}
export const defaults = {}
export const createHomeStoreModel = () => types.optional(HomeModel, defaults as any)
