using caikdduopos.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace caikdduopos.Permissions;

public class AccessManagmentPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(AccessManagmentPermissions.GroupName);
        myGroup.AddPermission(
        AccessManagmentPermissions.GroupName+".XXXCreation",
        L(AccessManagmentPermissions.GroupName + ".XXXCreation"));
    

        //Define your own permissions here. Example:
        //myGroup.AddPermission(AccessManagmentPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<AccessManagmentResource>(name);
    }
}

public class StorePermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        //var myGroup = context.AddGroup(AccessManagmentPermissions.StoreGroupName);
        var myGroup = context.AddGroup("StoreManagement", L("StoreManagement"));
        myGroup.AddPermission(
        "StoreManagement.Creation",
        L("StoreManagement.Creation"));
        myGroup.AddPermission(
         "StoreManagement.Edit",
        L("StoreManagement.Edit"));
        myGroup.AddPermission(
        "StoreManagement.View",
        L("StoreManagement.View"));

        //Define your own permissions here. Example:
        //myGroup.AddPermission(AccessManagmentPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<AccessManagmentResource>(name);
    }
}

