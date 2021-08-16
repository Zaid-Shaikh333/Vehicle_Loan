using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VehicleLoanAPI.Service
{
    public interface IphotoService
    {
        public Task<ImageUploadResult> UploadPhotoAsync(IFormFile photo);

    }
}
