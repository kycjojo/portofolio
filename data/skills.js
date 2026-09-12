const SKILLS = [
  {
    category: "IT Networking",
    icon: "🌐",
    items: [
      { name: "Cisco IOS" },
      { name: "MikroTik RouterOS" },
      { name: "Firewall & NAT" },
      { name: "VLAN & Trunking" },
      { name: "OSPF / BGP / RIP" },
      { name: "VPN (IPsec/OpenVPN)" },
      { name: "WiFi Controller" },
      { name: "Wireshark" },
    ],
  },
  {
    category: "System Administration",
    icon: "🖥️",
    items: [
      { name: "Linux Server (Debian/Ubuntu)", icon: "linux" },
      { name: "Windows Server (AD DS/GPO)", icon: "windows11" },
      { name: "Nginx & Apache", icon: "nginx" },
      { name: "Proxmox & VMware", icon: "proxmox" },
      { name: "MySQL & MariaDB", icon: "mysql" },
      { name: "Bash Scripting", icon: "bash" },
      { name: "SSH & Remote Access" },
      { name: "BIND9 DNS Server" },
    ],
  },
  {
    category: "Network Security & Monitoring",
    icon: "🛡️",
    items: [
      { name: "Packet Analysis (Wireshark)" },
      { name: "Firewall Filtering & ACL" },
      { name: "Failover & High Availability" },
      { name: "System Hardening" },
      { name: "Bandwidth Mgmt (QoS)" },
      { name: "Dual-Stack IPv4/IPv6" },
    ],
  },
  {
    category: "Tools, Simulation & DevOps",
    icon: "🛠️",
    items: [
      { name: "Cisco Packet Tracer" },
      { name: "GNS3 / EVE-NG" },
      { name: "Git & GitHub", icon: "github" },
      { name: "Linux Terminal / CLI", icon: "linux" },
      { name: "VS Code", icon: "vscode" },
      { name: "Proxmox VE", icon: "proxmox" },
    ],
  },
  {
    category: "Software & Web Development",
    icon: "💻",
    items: [
      { name: "HTML5 & CSS3", icon: "html5" },
      { name: "JavaScript & TypeScript", icon: "javascript" },
      { name: "Python", icon: "python" },
      { name: "PHP & Laravel", icon: "php" },
      { name: "Node.js & Express", icon: "nodejs" },
      { name: "SQL Analytics", icon: "postgresql" },
    ],
  },
];

export default SKILLS;
