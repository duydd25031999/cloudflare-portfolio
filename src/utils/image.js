export const transformImageSize = ({ src, width, height }) => {
    return `/cdn-cgi/image/format=auto${ width ? ',width=' + width : '' }${ height ? ',height=' + height : '' }/${src}`;
}