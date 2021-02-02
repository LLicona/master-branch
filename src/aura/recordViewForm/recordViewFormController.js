({
    save : function(component, event, helper) {
        component.find("edit").get("e.recordSave").fire();
        $A.get('e.force:refreshView').fire();
    }
})