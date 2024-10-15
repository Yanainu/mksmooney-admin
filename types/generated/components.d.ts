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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'colors.page-colors': ColorsPageColors;
      'ui.header-navigation': UiHeaderNavigation;
      'ui.navigaion-item': UiNavigaionItem;
      'ui.vocal-about-me': UiVocalAboutMe;
    }
  }
}
