import type { Schema, Struct } from '@strapi/strapi';

export interface ColorsPageColors extends Struct.ComponentSchema {
  collectionName: 'components_colors_page_colors';
  info: {
    displayName: 'pageColors';
  };
  attributes: {};
}

export interface UiHeaderNavigation extends Struct.ComponentSchema {
  collectionName: 'components_ui_header_navigations';
  info: {
    displayName: 'HeaderNavigation';
  };
  attributes: {
    NavigationItem: Schema.Attribute.Component<'ui.navigaion-item', false>;
  };
}

export interface UiNavigaionItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_navigaion_items';
  info: {
    description: '';
    displayName: 'NavigaionItem';
  };
  attributes: {
    link: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface UiVocalAboutMe extends Struct.ComponentSchema {
  collectionName: 'components_ui_vocal_about_mes';
  info: {
    description: '';
    displayName: 'Vocal-AboutMe';
  };
  attributes: {
    buttonLink: Schema.Attribute.Text;
    buttonText: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    descriptionLink: Schema.Attribute.Text;
    descriptionLinkURL: Schema.Attribute.Text;
    leftPhoto: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    rightPhoto: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.Text;
    titleMainWord: Schema.Attribute.Text;
  };
}

export interface UiVocalAchievements extends Struct.ComponentSchema {
  collectionName: 'components_ui_vocal_achievements';
  info: {
    displayName: 'Vocal-Achievements';
  };
  attributes: {
    InfoSquareBlocks: Schema.Attribute.Component<
      'ui.vocal-work-places-block',
      true
    >;
    title: Schema.Attribute.Text;
  };
}

export interface UiVocalEducation extends Struct.ComponentSchema {
  collectionName: 'components_ui_vocal_educations';
  info: {
    description: '';
    displayName: 'Vocal-Education';
  };
  attributes: {
    title: Schema.Attribute.Text;
    VocalEducationBlock: Schema.Attribute.Component<
      'ui.vocal-education-block',
      true
    >;
  };
}

export interface UiVocalEducationBlock extends Struct.ComponentSchema {
  collectionName: 'components_ui_vocal_education_blocks';
  info: {
    description: '';
    displayName: 'VocalEducationBlock';
  };
  attributes: {
    description: Schema.Attribute.Text;
    position: Schema.Attribute.Enumeration<['left', 'right']>;
    title: Schema.Attribute.Text;
    year: Schema.Attribute.Text;
  };
}

export interface UiVocalFeedback extends Struct.ComponentSchema {
  collectionName: 'components_ui_vocal_feedbacks';
  info: {
    displayName: 'Vocal-Feedback';
  };
  attributes: {
    InfoSquareBlocks: Schema.Attribute.Component<
      'ui.vocal-work-places-block',
      true
    >;
    title: Schema.Attribute.Text;
  };
}

export interface UiVocalMediaSongComponent extends Struct.ComponentSchema {
  collectionName: 'components_ui_vocal_media_song_components';
  info: {
    displayName: 'VocalMediaSongComponent';
  };
  attributes: {
    artist: Schema.Attribute.Text;
    audio: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.Text;
  };
}

export interface UiVocalPlayer extends Struct.ComponentSchema {
  collectionName: 'components_ui_vocal_players';
  info: {
    description: '';
    displayName: 'Vocal-Media';
  };
  attributes: {
    Songs: Schema.Attribute.Component<'ui.vocal-media-song-component', true>;
    title: Schema.Attribute.Text;
  };
}

export interface UiVocalWorkPlaces extends Struct.ComponentSchema {
  collectionName: 'components_ui_vocal_work_places';
  info: {
    description: '';
    displayName: 'Vocal-WorkPlaces';
  };
  attributes: {
    InfoSquareBlocks: Schema.Attribute.Component<
      'ui.vocal-work-places-block',
      true
    >;
    title: Schema.Attribute.Text;
  };
}

export interface UiVocalWorkPlacesBlock extends Struct.ComponentSchema {
  collectionName: 'components_ui_vocal_work_places_blocks';
  info: {
    description: '';
    displayName: 'InfoSquareBlock';
  };
  attributes: {
    colorTheme: Schema.Attribute.Enumeration<['vocal', 'fateInc', 'coaching']>;
    description: Schema.Attribute.Text;
    hasArrowIconBottom: Schema.Attribute.Boolean;
    hasArrowIconTop: Schema.Attribute.Boolean;
    isFeedback: Schema.Attribute.Boolean;
    isPhotoOnly: Schema.Attribute.Boolean;
    link: Schema.Attribute.Text;
    photo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subTitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'colors.page-colors': ColorsPageColors;
      'ui.header-navigation': UiHeaderNavigation;
      'ui.navigaion-item': UiNavigaionItem;
      'ui.vocal-about-me': UiVocalAboutMe;
      'ui.vocal-achievements': UiVocalAchievements;
      'ui.vocal-education': UiVocalEducation;
      'ui.vocal-education-block': UiVocalEducationBlock;
      'ui.vocal-feedback': UiVocalFeedback;
      'ui.vocal-media-song-component': UiVocalMediaSongComponent;
      'ui.vocal-player': UiVocalPlayer;
      'ui.vocal-work-places': UiVocalWorkPlaces;
      'ui.vocal-work-places-block': UiVocalWorkPlacesBlock;
    }
  }
}
