"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Projects: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return null;
};

export default Projects;
