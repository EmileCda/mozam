/**store for screen1 : accueil
 * data stored is :language for display
 *
 *
 */
import { action, map } from "nanostores";
import { Lang } from "../components/constant";

export const headerStore = map({
  martin : "",
  burgerMenuOn: false,
  lang: "pr",
});

export const toggleStoreBurgerMenuState = action(
  headerStore,
  "toggleStoreBurgerMenuState",
  (store,value : boolean) => {
    store.setKey("burgerMenuOn",value);
  }
);

export const setStoreLang = action(
  headerStore,
  "setStoreLang",
  (store, value: Lang) => {
    store.setKey("lang", value);
  }
);

export const setbur = action(
  headerStore,
  "setbur",
  (store, value: string) => {
    store.setKey("martin", value);
  }
);
