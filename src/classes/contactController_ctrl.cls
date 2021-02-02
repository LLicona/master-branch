public with sharing class contactController_ctrl {
    @AuraEnabled(cacheable=true)
    public static Contact[] getContactList(){
        return [SELECT Id, Name, Title,Phone, Email FROM Contact LIMIT 5];
        
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> findContacts(String searchKey){
        String key = '%'+searchKey+'%';
        return [SELECT Id, Name, Title,Phone, Email FROM Contact WHERE Name LIKE:key];
    }

    @AuraEnabled(cacheable=true)
    public static contact getSingleContact(){
        return [SELECT Id, Name, Title,Phone, Email FROM Contact LIMIT 1];
    }
}