// eslint-disable-next-line @conarti/feature-sliced/absolute-relative,@conarti/feature-sliced/layers-slices,@conarti/feature-sliced/public-api
import HomePage from "@/pages/home";
import { protectedPage } from "@/features/auth";

export default protectedPage(HomePage);
