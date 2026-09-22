import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Private prospect demo: belt-and-braces noindex on every response.
  async headers() {
    return [{ source: "/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }];
  },
};

export default nextConfig;
