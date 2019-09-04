import { ThunkAction } from 'redux-thunk';
import {
    ADD_PARAGRAPH,
    addParagraphAction,
    Paragraph,
} from '../../constants/action-types';
import { AppState } from '../rootReducer';

export function addParagraph(payload: Paragraph): addParagraphAction {
  return {
    type: ADD_PARAGRAPH,
    payload,
  };
}
