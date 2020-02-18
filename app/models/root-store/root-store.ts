import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { NavigationStoreModel } from "../../navigation/navigation-store"
import {createHomeStoreModel} from "../home";

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  navigationStore: types.optional(NavigationStoreModel, {}),
  home: createHomeStoreModel(),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
