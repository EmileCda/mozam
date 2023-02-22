/**store for screen1 : accueil
 * data stored is :language for display
 *
 *
 */
import { action, map } from "nanostores";
import { Lang } from "../components/constant";

const accueilStore = map({
  lang: "",
});

const setStoreLang = action(
  accueilStore,
  "setStoreLang",
  (store, value: Lang) => {
    store.setKey("lang", value);
  }
);
