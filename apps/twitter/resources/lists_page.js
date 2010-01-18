// ==========================================================================
// Project:   Twitter - listsPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Twitter */

Twitter.listsPage = SC.Page.create({
  
  mainView: SC.View.design({
    childViews: ['splitView','saveRecords', 'addListButton'],
    
    addListButton: SC.ButtonView.design({
      layout: { bottom: 3, height: 28, width: 80, left: 3 },
      title: 'New List',
      target: 'Twitter.listsController',
      action: 'createNewList'
    }),
    
    saveRecords: SC.ButtonView.design({
      layout: { bottom: 3, height: 28, width: 80, left: 86 },
      title: 'Commit Records',
      target: 'Twitter.store',
      action: 'commitRecords'
    }),
    
    splitView: SC.SplitView.design({
      layout: { bottom: 30, top: 20 },
     layoutDirection: SC.LAYOUT_HORIZONTAL,
     defaultThickness: 0.3,
     autoresizeBehavior: SC.RESIZE_BOTTOM_RIGHT,
     canCollapseViews: YES,
     topLeftMinThickness: 200,
     topLeftMaxThickness: 900,
     topLeftView: SC.ScrollView.design({
       hasHorizontalScroller: NO,
       layout: { top: 0, bottom: 0, left: 0, right: 0 },
       backgroundColor: 'white',

       contentView: SC.ListView.design({   
         classNames: ['lists'],
         canEditContent: YES,
         hasContentIcon: YES,
         rowHeight: 60,
           contentBinding: 'Twitter.listsController.arrangedObjects',
           selectionBinding: 'Twitter.listsController.selection',

           contentValueKey: 'name'
         
       })
     }),

     dividerView: SC.SplitDividerView,

     bottomRightView: SC.SplitView.design({
        layout: { top: 0, bottom: 0, left: 0, right: 0 },
        layoutDirection: SC.LAYOUT_HORIZONTAL,
        defaultThickness: 0.5,
        autoresizeBehavior: SC.RESIZE_BOTTOM_RIGHT,
        canCollapseViews: YES,
        topLeftMinThickness: 200,
        topLeftMaxThickness: 900,
        topLeftView: SC.ScrollView.design({
          hasHorizontalScroller: NO,
          layout: { top: 0, bottom: 0, left: 0, right: 0 },
          backgroundColor: 'white',

          contentView: SC.ListView.design({   
            classNames: ['users'],
            hasContentIcon: YES,
            rowHeight: 60,
              contentBinding: 'Twitter.usersController.arrangedObjects',
              selectionBinding: 'Twitter.usersController.selection',

              contentValueKey: 'screenName',
              contentIconKey: 'profileImage'
          })
        }),

        dividerView: SC.SplitDividerView,

        bottomRightView: SC.ScrollView.design({
          hasHorizontalScroller: NO,
          layout: { top: 0, bottom: 0, left: 0, right: 0 },
          backgroundColor: 'white',

          contentView: SC.ListView.design({   
            classNames: ['tweets'],
            hasContentIcon: YES,
            rowHeight: 60,
            contentBinding: 'Twitter.userTweetsController.arrangedObjects',
            selectionBinding: 'Twitter.userTweetsController.selection',
            contentValueKey: "text",     
            contentIconKey: 'profileImage'
          })
        })
      })
   })
  })
});

