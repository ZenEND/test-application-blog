export const ADD_PARAGRAPH = 'ADD_PARAGRAPH';

export interface Paragraph {
  paragraph: string;
  id: string;
}

export interface addParagraphAction {
  type: typeof ADD_PARAGRAPH;
  payload: Paragraph;
}
