Ext.define("ModernTunes.view.main.MainView", {
  extend: "Ext.tab.Panel",
  xtype: 'mainview',
  requires: [
    'ModernTunes.view.main.MainViewController',
    'ModernTunes.view.main.MainViewModel',
    'ModernTunes.view.TunesView',
    'ModernTunes.view.TunesGrid'
  ],
  controller: "mainviewcontroller",
  viewModel: {
    type: "mainviewmodel"
  },

  tabBarPosition: 'bottom',

  items: [{
    title: "Thumbnails",
    xtype: 'tunesview',
    listeners: {
      select: 'onThumbSelect' // Agregado el listener select
    },
    bind: {
      store: '{tunes}'
    }
  }, {
    title: "Grid",
    xtype: 'tunesgrid',
    listeners: {
      select: 'onGridSelect' // Agregado el listener select
    },
    bind: {
      store: '{tunes}'
    }
  }]
});