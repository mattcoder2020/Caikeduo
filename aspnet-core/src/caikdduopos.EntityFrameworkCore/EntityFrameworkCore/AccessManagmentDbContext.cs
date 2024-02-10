﻿using caikdduopos.AggregateRoots;
using caikdduopos.Entity;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.BackgroundJobs.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Modeling;
using Volo.Abp.FeatureManagement.EntityFrameworkCore;
using Volo.Abp.Identity;
using Volo.Abp.Identity.EntityFrameworkCore;
using Volo.Abp.OpenIddict.EntityFrameworkCore;
using Volo.Abp.PermissionManagement.EntityFrameworkCore;
using Volo.Abp.SettingManagement.EntityFrameworkCore;
using Volo.Abp.TenantManagement;
using Volo.Abp.TenantManagement.EntityFrameworkCore;

namespace caikdduopos.EntityFrameworkCore;

[ReplaceDbContext(typeof(IIdentityDbContext))]
[ReplaceDbContext(typeof(ITenantManagementDbContext))]
[ConnectionStringName("Default")]
public class AccessManagmentDbContext :
    AbpDbContext<AccessManagmentDbContext>,
    IIdentityDbContext,
    ITenantManagementDbContext
{
    /* Add DbSet properties for your Aggregate Roots / Entities here. */

    #region Entities from the modules

    /* Notice: We only implemented IIdentityDbContext and ITenantManagementDbContext
     * and replaced them for this DbContext. This allows you to perform JOIN
     * queries for the entities of these modules over the repositories easily. You
     * typically don't need that for other modules. But, if you need, you can
     * implement the DbContext interface of the needed module and use ReplaceDbContext
     * attribute just like IIdentityDbContext and ITenantManagementDbContext.
     *
     * More info: Replacing a DbContext of a module ensures that the related module
     * uses this DbContext on runtime. Otherwise, it will use its own DbContext class.
     */

    //Identity
    public DbSet<IdentityUser> Users { get; set; }
    public DbSet<IdentityRole> Roles { get; set; }
    public DbSet<IdentityClaimType> ClaimTypes { get; set; }
    public DbSet<OrganizationUnit> OrganizationUnits { get; set; }
    public DbSet<IdentitySecurityLog> SecurityLogs { get; set; }
    public DbSet<IdentityLinkUser> LinkUsers { get; set; }
    public DbSet<IdentityUserDelegation> UserDelegations { get; set; }

    // Tenant Management
    public DbSet<Tenant> Tenants { get; set; }
    public DbSet<TenantConnectionString> TenantConnectionStrings { get; set; }

    #endregion

    #region Entities from Application
    public DbSet<Store> Stores { get; set; }
    public DbSet<Cashier> Cashiers { get; set; }
    public DbSet<Sales> Sales { get; set; }
    public DbSet<SalesRep> SalesReps { get; set; }
    public DbSet<SalesType> SalesTypes { get; set; }
    public DbSet<MerchandiseSales> MerchandiseSales { get; set; }
    public DbSet<WholeSales> WholeSales { get; set; }
    public DbSet<Member> Members { get; set; }
    public DbSet<PaymentMethod> PaymentMethods { get; set; }
    public DbSet<Product> Products { get; set; }
    public DbSet<ProductType> ProductTypes { get; set; }



    #endregion


    public AccessManagmentDbContext(DbContextOptions<AccessManagmentDbContext> options)
        : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        /* Include modules to your migration db context */

        builder.ConfigurePermissionManagement();
        builder.ConfigureSettingManagement();
        builder.ConfigureBackgroundJobs();
        builder.ConfigureAuditLogging();
        builder.ConfigureIdentity();
        builder.ConfigureOpenIddict();
        builder.ConfigureFeatureManagement();
        builder.ConfigureTenantManagement();

        /* Configure your own tables/entities inside here */

        builder.Entity<Store>(b =>
        {
            b.ToTable(AccessManagmentConsts.DbTablePrefix + "Store", AccessManagmentConsts.DbSchema);
            b.ConfigureByConvention(); //auto configure for the base class props
            b.Property(x => x.Name).IsRequired().HasMaxLength(20);
            b.Property(x => x.FullName).IsRequired().HasMaxLength(40);
            b.Property(x => x.Address).IsRequired().HasMaxLength(100);
            b.Property(x => x.Phone).IsRequired().HasMaxLength(20);

            //...
        });
        builder.Entity<Product>(b =>
        {
            b.ConfigureByConvention(); //auto configure for the base class props
        });
    }

}
