import {
    ADD_PARAGRAPH,
    Paragraph,
    addParagraphAction,
} from "../../constants/action-types";
import { ThunkAction } from "redux-thunk";
import { AppState } from "../rootReducer";

export function addParagraph(payload: Paragraph): addParagraphAction {
    return {
        type: ADD_PARAGRAPH,
        payload
    }
};
