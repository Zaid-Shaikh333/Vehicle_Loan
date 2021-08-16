using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VehicleLoanAPI.Service
{
    public class PhotoService:IphotoService
    {
        public readonly Cloudinary cloudinary;
        public PhotoService(IConfiguration Config)
        {

            Account account = new Account(
                Config.GetSection("CloudinarySettings:CloudName").Value,
                Config.GetSection("CloudinarySettings:APIKey").Value,
                Config.GetSection("CloudinarySettings:APISecret").Value
            );

             cloudinary = new Cloudinary(account);
        }
        public async Task<ImageUploadResult> UploadPhotoAsync(IFormFile photo)
        {
            var uploadResult = new ImageUploadResult();
            if(photo.Length>0)
            {
                using var stream = photo.OpenReadStream();
                var uploadParams = new ImageUploadParams
                {
                    File = new FileDescription(photo.FileName, stream),
                Transformation=new Transformation()
                    .Height(500).Width(800)
                };
                uploadResult = await cloudinary.UploadAsync(uploadParams);
            }
            return uploadResult;
        }
    }
}
