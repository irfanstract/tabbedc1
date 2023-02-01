




export { 
  /** HOOKS - IONIC POPUPS */ 

  useIonToast       as useToast ,
  useIonAlert       as useAlert ,
  useIonActionSheet as useActionSheet ,
  useIonModal       as useModality ,

  /* STANDALONE COMPONENTS */
  
  IonIcon   as IonIcon ,
  
  IonTabs         as Tabs    ,
  IonCard         as Card    ,
  IonToolbar      as Toolbar , 
  IonButton       as Button  ,
  IonList         as List    ,
  IonSelect       as WhichOnePicker   ,
  IonSelectOption as WhichOneOption   ,
  IonToggle       as Toggle   ,
  IonCheckbox     as CheckBox   ,
  IonRadio        as RadioButton ,
  IonRadioGroup   as RadioButtonGroup ,
  IonReorder      as Reorder   ,
  IonContent      as Content   ,
  IonInput        as Input , 
  IonRange        as BoundedRangeSlider ,
  IonModal        as IonModal ,
  // AlertButton     as AlertButton ,

  /* PART/SLOT(s) */

  IonPage         as Page    , // top-level ; not applicable alsewhere
  IonTitle        as Title    , // ION-PAGE
  IonCardContent  as CardContent ,
  IonHeader       as Header  ,
  IonRouterOutlet ,
  
  IonLabel as Label, // assumes enclosing ListItem
  
  IonTabBar    , // assumes enclosing Tabs
  IonTabButton , // assumes enclosing Tabs

  IonReorderGroup as ReorderGroup , // assumes enclosing List
  IonItemSliding  as ItemSliding , // assumes enclosing List
  IonItemDivider  as ItemDivider , // assumes enclosing List
  IonItem         as Item , // assumes enclosing List

} from '@ionic/react';
export * as iconNames from 'ionicons/icons';
export {
  IonApp as IonApp,  
} from '@ionic/react';
;;;{};


