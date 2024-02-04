using caikdduopos.Dto;
using caikdduopos.Entity;
using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace caikdduopos.ApplicationServices
{
    public class MemberApplicationService :
        CrudAppService<
        Member,
        MemberDto,
        int,
        PagedAndSortedResultRequestDto,
        MemberDto>,
        IApplicationService
    {
        public MemberApplicationService(IRepository<Member, int> repository) : base(repository)
        {
            this.repository = repository;
        }

        private readonly IRepository<Member, int> repository;
    }
}
