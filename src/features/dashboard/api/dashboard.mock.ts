export const chartData = [
  { day: "Mon", views: 180, applied: 120 },
  { day: "Tue", views: 160, applied: 140 },
  { day: "Wed", views: 220, applied: 80 },
  { day: "Thu", views: 200, applied: 160 },
  { day: "Fri", views: 190, applied: 140 },
  { day: "Sat", views: 120, applied: 60 },
  { day: "Sun", views: 140, applied: 100 },
];

export const maxValue = Math.max(
  ...chartData.flatMap((d) => [d.views, d.applied])
);

export const jobListings = [
  {
    id: 1,
    title: "Social Media Assistant",
    company: "Nomad",
    location: "Paris, France",
    type: "Full-Time",
    tags: ["Marketing", "Design"],
    applied: 5,
    capacity: 10,
    logo: "🏢",
  },
  {
    id: 2,
    title: "Brand Designer",
    company: "Nomad",
    location: "Paris, France",
    type: "Full-Time",
    tags: ["Business", "Design"],
    applied: 5,
    capacity: 10,
    logo: "📦",
  },
  {
    id: 3,
    title: "Interactive Developer",
    company: "Terraform",
    location: "Berlin, Germany",
    type: "Full-Time",
    tags: ["Marketing", "Design"],
    applied: 5,
    capacity: 10,
    logo: "🔧",
  },
  {
    id: 4,
    title: "Product Designer",
    company: "ClassPass",
    location: "Berlin, Germany",
    type: "Full-Time",
    tags: ["Business", "Design"],
    applied: 5,
    capacity: 10,
    logo: "⚡",
  },
];
