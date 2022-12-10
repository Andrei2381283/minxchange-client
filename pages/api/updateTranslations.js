//import { globalI18n } from "next-i18next/dist/types/appWithTranslation";
import { i18n } from "next-i18next";
import { updateTranslationId } from "../../utils/translationId"

export default async (req, res) => {
    if(req.query.token == "1sp1a286nq61tq2r69fw6n"){
        /* updateTranslationId(); */
        //await res.revalidate("/");
        await i18n?.reloadResources();
        return res.status(200).send();
    }
}