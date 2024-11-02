import type { Schema, Attribute } from '@strapi/strapi';

export interface ColorsPageColors extends Schema.Component {
  collectionName: 'components_colors_page_colors';
  info: {
    displayName: 'pageColors';
  };
  attributes: {};
}

export interface UiHeaderNavigation extends Schema.Component {
  collectionName: 'components_ui_header_navigations';
  info: {
    displayName: 'HeaderNavigation';
  };
  attributes: {
    NavigationItem: Attribute.Component<'ui.navigaion-item'>;
  };
}

export interface UiNavigaionItem extends Schema.Component {
  collectionName: 'components_ui_navigaion_items';
  info: {
    displayName: 'NavigaionItem';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    link: Attribute.Text;
  };
}

export interface UiVocalAboutMe extends Schema.Component {
  collectionName: 'components_ui_vocal_about_mes';
  info: {
    displayName: 'Vocal-AboutMe';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    description: Attribute.Text;
    buttonText: Attribute.Text;
    titleMainWord: Attribute.Text;
    descriptionLink: Attribute.Text;
    descriptionLinkURL: Attribute.Text;
    leftPhoto: Attribute.Media;
    rightPhoto: Attribute.Media;
    buttonLink: Attribute.Text;
  };
}

export interface UiVocalAchievements extends Schema.Component {
  collectionName: 'components_ui_vocal_achievements';
  info: {
    displayName: 'Vocal-Achievements';
  };
  attributes: {
    title: Attribute.Text;
    InfoSquareBlocks: Attribute.Component<'ui.vocal-work-places-block', true>;
  };
}

export interface UiVocalEducationBlock extends Schema.Component {
  collectionName: 'components_ui_vocal_education_blocks';
  info: {
    displayName: 'VocalEducationBlock';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    description: Attribute.Text;
    year: Attribute.Text;
    position: Attribute.Enumeration<['left', 'right']>;
  };
}

export interface UiVocalEducation extends Schema.Component {
  collectionName: 'components_ui_vocal_educations';
  info: {
    displayName: 'Vocal-Education';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    VocalEducationBlock: Attribute.Component<'ui.vocal-education-block', true>;
  };
}

export interface UiVocalWorkPlacesBlock extends Schema.Component {
  collectionName: 'components_ui_vocal_work_places_blocks';
  info: {
    displayName: 'InfoSquareBlock';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    subTitle: Attribute.Text;
    description: Attribute.Text;
    photo: Attribute.Media;
    colorTheme: Attribute.Enumeration<['vocal', 'fateInc', 'coaching']>;
    isPhotoOnly: Attribute.Boolean;
    hasArrowIconTop: Attribute.Boolean;
    hasArrowIconBottom: Attribute.Boolean;
    link: Attribute.Text;
  };
}

export interface UiVocalWorkPlaces extends Schema.Component {
  collectionName: 'components_ui_vocal_work_places';
  info: {
    displayName: 'Vocal-WorkPlaces';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    InfoSquareBlocks: Attribute.Component<'ui.vocal-work-places-block', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'colors.page-colors': ColorsPageColors;
      'ui.header-navigation': UiHeaderNavigation;
      'ui.navigaion-item': UiNavigaionItem;
      'ui.vocal-about-me': UiVocalAboutMe;
      'ui.vocal-achievements': UiVocalAchievements;
      'ui.vocal-education-block': UiVocalEducationBlock;
      'ui.vocal-education': UiVocalEducation;
      'ui.vocal-work-places-block': UiVocalWorkPlacesBlock;
      'ui.vocal-work-places': UiVocalWorkPlaces;
    }
  }
}
