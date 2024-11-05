namespace api.Tenant
{
    public class Tenant : ITenant
    {
        public int TenantId { get; set; }
        public Tenant (int tenantId)
        {
            TenantId = tenantId;
        }
    }
}
