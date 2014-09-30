/**
 * Created by adderlyjc on 29/09/2014.
 */


var photoModel = {
    id: '',
    albumId: '',
    title: '',
    url: '',
    thumbnailUrl: ''
}

photoModel.prototype.getThumbnailUrl = function () {
    return this.thumbnailUrl;
}


