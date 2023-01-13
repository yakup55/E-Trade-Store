
using AutoMapper;
using Entities.Dtos;
using Entities.Models;

namespace E_Trade.Profiles
{
    public class MappingProfile:Profile
    {
        public MappingProfile()
        {
            CreateMap<ProductDto,Product>().ReverseMap();
            CreateMap<CategoryDto,Category>().ReverseMap();
            CreateMap<ColorDto,Color>().ReverseMap();
            CreateMap<SizeDto,Size>().ReverseMap();
            CreateMap<UserDtoRegistraction,User>().ReverseMap();
            CreateMap<CommentDto,Comment>().ReverseMap();
            CreateMap<NumberDto,Number>().ReverseMap();
            CreateMap<ProductDetailDto, ProductDetails>().ReverseMap();
            CreateMap<PcDetailDto, ProductDetailPc>().ReverseMap();
            CreateMap<WacthDetailDto, ProductDetailWatch>().ReverseMap();
            CreateMap<TvDetailDto, ProductDetailTv>().ReverseMap();
            CreateMap<ManWomenDetailDto, ProductDetailManWomen>().ReverseMap();
            CreateMap<PhoneDetailDto, ProductDetailPhone>().ReverseMap();
            CreateMap<HeadPhoneDetailDto, ProductDetailHeadPhone>().ReverseMap();
            CreateMap<BrandDto,Brand>().ReverseMap();
        }
    }
}
