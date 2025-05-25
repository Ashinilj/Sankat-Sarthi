"use client"

import { useState } from "react"
import {
  BarChart3,
  Users,
  CreditCard,
  Settings,
  HelpCircle,
  Search,
  User,
  MoreHorizontal,
  AlertTriangle,
  Shield,
  Activity,
  Plus,
  MapPin,
  Clock,
  Phone,
  Mail,
  FileText,
  CheckCircle,
  XCircle,
  Lock,
  Palette,
  Globe,
  Download,
  BookOpen,
  MessageCircle,
  LifeBuoy,
  Eye,
  UserPlus,
  Trash2,
  Database,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { PieChart, BarChart, Pie, Bar, ResponsiveContainer } from "recharts"

const navigationItems = [
  { icon: BarChart3, label: "Dashboard", id: "dashboard" },
  { icon: FileText, label: "Requests", id: "requests" },
  { icon: Database, label: "Records", id: "records" },
  { icon: BarChart3, label: "Reports", id: "reports" },
  { icon: Users, label: "Team", id: "team" },
  { icon: Shield, label: "Verifications", id: "verifications" },
  { icon: Settings, label: "Settings", id: "settings" },
  { icon: HelpCircle, label: "Help", id: "help" },
]

const tabs = [
  { label: "Portal", id: "portal", active: true },
  { label: "Stats", id: "stats" },
  { label: "Inbox", id: "inbox" },
  { label: "Team", id: "team" },
  { label: "Notifications", id: "notifications", badge: "3" },
]

const activityData = [
  {
    caseId: "060924-5",
    type: "Wildlife",
    status: ["Received", "Approved", "Status Verified"],
    responses: ["Rescue Team dispatched", "Sending Fire Department", "Police Informed", "Sending Medical Help"],
  },
  {
    caseId: "060924-6",
    type: "Landslide",
    status: ["Received", "Approved", "Status Verified"],
    responses: ["Rescue Team dispatched", "Relief Released", "Police On Site", "Medical Help Sent"],
  },
]

const targetZones = ["Assam", "West Bengal", "Bihar", "Uttar Pradesh", "Idukki", "Wayanad", "Kottayam", "Palakad"]

const newsItems = [
  {
    date: "August 24, 2024",
    content: "A significant earthquake shook India earlier today, leaving at least 50 people injured...",
    source: "@hindustan_times",
    link: "Read More",
  },
  {
    date: "August 24, 2024",
    content:
      "Landslides Hit Kerala Amid Heavy Rains. The state saw significant landslides in hilly regions, leading to casualties and extensive damage...",
    source: "@asianet_news",
    link: "Read More",
  },
]

const rescueRequestsData = [
  {
    id: 1,
    subject: "Water Level",
    timeReceived: "04.09.2024 09.24 AM",
    category: "Low Risk",
    location: "Sahabganj, Gujarat",
    verification: "Pending",
    sender: "Aarav Sinha",
    response: "Pending",
    checked: false,
  },
  {
    id: 2,
    subject: "Wildfire",
    timeReceived: "05.09.2024 04:21 PM",
    category: "High Risk",
    location: "Jhadol, Rajasthan",
    verification: "Approved",
    sender: "Aryan Gupta",
    response: "Sent",
    checked: true,
  },
  {
    id: 3,
    subject: "Earthquake",
    timeReceived: "4th Sep 2024, 9:43 PM",
    category: "High Risk",
    location: "Digboi, Assam",
    verification: "Approved",
    sender: "Aryan Gupta",
    response: "Sent",
    checked: true,
  },
  {
    id: 4,
    subject: "Earthquake",
    timeReceived: "4th Sep 2024, 9:43 PM",
    category: "High Risk",
    location: "Digboi, Assam",
    verification: "Approved",
    sender: "Aryan Gupta",
    response: "Sent",
    checked: true,
  },
  {
    id: 5,
    subject: "Earthquake",
    timeReceived: "4th Sep 2024, 9:43 PM",
    category: "High Risk",
    location: "Digboi, Assam",
    verification: "Approved",
    sender: "Aryan Gupta",
    response: "Sent",
    checked: true,
  },
  {
    id: 6,
    subject: "Earthquake",
    timeReceived: "4th Sep 2024, 9:43 PM",
    category: "High Risk",
    location: "Digboi, Assam",
    verification: "Approved",
    sender: "Aryan Gupta",
    response: "Sent",
    checked: true,
  },
  {
    id: 7,
    subject: "Earthquake",
    timeReceived: "4th Sep 2024, 9:43 PM",
    category: "High Risk",
    location: "Digboi, Assam",
    verification: "Approved",
    sender: "Aryan Gupta",
    response: "Sent",
    checked: true,
  },
  {
    id: 8,
    subject: "Earthquake",
    timeReceived: "4th Sep 2024, 9:43 PM",
    category: "High Risk",
    location: "Digboi, Assam",
    verification: "Approved",
    sender: "Aryan Gupta",
    response: "Sent",
    checked: true,
  },
  {
    id: 9,
    subject: "Earthquake",
    timeReceived: "4th Sep 2024, 9:43 PM",
    category: "High Risk",
    location: "Digboi, Assam",
    verification: "Approved",
    sender: "Aryan Gupta",
    response: "Sent",
    checked: true,
  },
  {
    id: 10,
    subject: "Earthquake",
    timeReceived: "4th Sep 2024, 9:43 PM",
    category: "High Risk",
    location: "Digboi, Assam",
    verification: "Approved",
    sender: "Aryan Gupta",
    response: "Sent",
    checked: true,
  },
]

const reliefRequestsData = [
  {
    id: "VOL123",
    timeReceived: "4th Sep 2024, 9.24 PM",
    category: "Food",
    location: "Sahabganj, Gujarat",
    status: "Awaiting",
    response: "Added",
    commits: "5+",
  },
  {
    id: "VOL453",
    timeReceived: "4th Sep 2024, 9.46 PM",
    category: "Medicines",
    location: "Goalpara, Assam",
    status: "Pending",
    response: "Not Added",
    commits: "0",
  },
  {
    id: "VOL453",
    timeReceived: "4th Sep 2024, 9.46 PM",
    category: "Medicines",
    location: "Bhadrak, Odisha",
    status: "In Operation",
    response: "Added",
    commits: "3",
  },
  {
    id: "VOL453",
    timeReceived: "4th Sep 2024, 9.46 PM",
    category: "Medicines",
    location: "Bhadrak, Odisha",
    status: "Completed",
    response: "Added",
    commits: "9",
  },
  {
    id: "VOL453",
    timeReceived: "4th Sep 2024, 9.46 PM",
    category: "Medicines",
    location: "Bhadrak, Odisha",
    status: "In Operation",
    response: "Added",
    commits: "3",
  },
  {
    id: "VOL453",
    timeReceived: "4th Sep 2024, 9.46 PM",
    category: "Medicines",
    location: "Bhadrak, Odisha",
    status: "Completed",
    response: "Added",
    commits: "3",
  },
  {
    id: "VOL453",
    timeReceived: "4th Sep 2024, 9.46 PM",
    category: "Medicines",
    location: "Bhadrak, Odisha",
    status: "Completed",
    response: "Added",
    commits: "9",
  },
  {
    id: "VOL453",
    timeReceived: "4th Sep 2024, 9.46 PM",
    category: "Medicines",
    location: "Bhadrak, Odisha",
    status: "In Operation",
    response: "Added",
    commits: "3",
  },
  {
    id: "VOL453",
    timeReceived: "4th Sep 2024, 9.46 PM",
    category: "Medicines",
    location: "Bhadrak, Odisha",
    status: "Completed",
    response: "Added",
    commits: "3",
  },
  {
    id: "VOL453",
    timeReceived: "4th Sep 2024, 9.46 PM",
    category: "Medicines",
    location: "Bhadrak, Odisha",
    status: "Completed",
    response: "Added",
    commits: "9",
  },
  {
    id: "VOL453",
    timeReceived: "4th Sep 2024, 9.46 PM",
    category: "Medicines",
    location: "Bhadrak, Odisha",
    status: "In Operation",
    response: "Added",
    commits: "3",
  },
  {
    id: "VOL453",
    timeReceived: "4th Sep 2024, 9.46 PM",
    category: "Medicines",
    location: "Bhadrak, Odisha",
    status: "Completed",
    response: "Added",
    commits: "3",
  },
]

const volunteerRecordsData = [
  {
    id: "VOL22334",
    name: "Aaryan Singh",
    gender: "Male",
    contact: "9876543219",
    status: "Verified",
    medicalProfile: "Valid",
    email: "aaryan.singh@gmail.com",
    fullContact: "9876543271",
    address: "Krishi Bhavan, Ashok Vihar, New Delhi Pincode-110001",
    bloodGroup: "B+",
    allergy: "Pollen",
    medicalConditions: "None",
    phobia: "None",
    phrAddress: "3456789",
    ayushmanId: "674528391013",
    cases: 3,
    modeOfHelp: "Rescue, Relief",
    skills: ["Swimmer", "Diver", "Climber", "First Aid"],
    profession: ["Ex-Army", "Social Worker"],
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "VOL22334",
    name: "Sanjana",
    gender: "Female",
    contact: "9876543219",
    status: "Verified",
    medicalProfile: "Valid",
    email: "sanjana@gmail.com",
    fullContact: "9876543219",
    address: "Sector 15, Noida, Uttar Pradesh Pincode-201301",
    bloodGroup: "O+",
    allergy: "None",
    medicalConditions: "None",
    phobia: "None",
    phrAddress: "3456790",
    ayushmanId: "674528391014",
    cases: 5,
    modeOfHelp: "Relief, Medical Aid",
    skills: ["First Aid", "Counseling", "Communication"],
    profession: ["Nurse", "Volunteer Coordinator"],
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "VOL22334",
    name: "Sanjana",
    gender: "Female",
    contact: "9876543219",
    status: "Verified",
    medicalProfile: "Valid",
    email: "sanjana@gmail.com",
    fullContact: "9876543219",
    address: "Sector 15, Noida, Uttar Pradesh Pincode-201301",
    bloodGroup: "O+",
    allergy: "None",
    medicalConditions: "None",
    phobia: "None",
    phrAddress: "3456790",
    ayushmanId: "674528391014",
    cases: 5,
    modeOfHelp: "Relief, Medical Aid",
    skills: ["First Aid", "Counseling", "Communication"],
    profession: ["Nurse", "Volunteer Coordinator"],
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "VOL22334",
    name: "Sanjana",
    gender: "Female",
    contact: "9876543219",
    status: "Verified",
    medicalProfile: "Valid",
    email: "sanjana@gmail.com",
    fullContact: "9876543219",
    address: "Sector 15, Noida, Uttar Pradesh Pincode-201301",
    bloodGroup: "O+",
    allergy: "None",
    medicalConditions: "None",
    phobia: "None",
    phrAddress: "3456790",
    ayushmanId: "674528391014",
    cases: 5,
    modeOfHelp: "Relief, Medical Aid",
    skills: ["First Aid", "Counseling", "Communication"],
    profession: ["Nurse", "Volunteer Coordinator"],
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "VOL22334",
    name: "Sanjana",
    gender: "Female",
    contact: "9876543219",
    status: "Verified",
    medicalProfile: "Valid",
    email: "sanjana@gmail.com",
    fullContact: "9876543219",
    address: "Sector 15, Noida, Uttar Pradesh Pincode-201301",
    bloodGroup: "O+",
    allergy: "None",
    medicalConditions: "None",
    phobia: "None",
    phrAddress: "3456790",
    ayushmanId: "674528391014",
    cases: 5,
    modeOfHelp: "Relief, Medical Aid",
    skills: ["First Aid", "Counseling", "Communication"],
    profession: ["Nurse", "Volunteer Coordinator"],
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "VOL22334",
    name: "Sanjana",
    gender: "Female",
    contact: "9876543219",
    status: "Verified",
    medicalProfile: "Valid",
    email: "sanjana@gmail.com",
    fullContact: "9876543219",
    address: "Sector 15, Noida, Uttar Pradesh Pincode-201301",
    bloodGroup: "O+",
    allergy: "None",
    medicalConditions: "None",
    phobia: "None",
    phrAddress: "3456790",
    ayushmanId: "674528391014",
    cases: 5,
    modeOfHelp: "Relief, Medical Aid",
    skills: ["First Aid", "Counseling", "Communication"],
    profession: ["Nurse", "Volunteer Coordinator"],
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "VOL22334",
    name: "Sanjana",
    gender: "Female",
    contact: "9876543219",
    status: "Verified",
    medicalProfile: "Valid",
    email: "sanjana@gmail.com",
    fullContact: "9876543219",
    address: "Sector 15, Noida, Uttar Pradesh Pincode-201301",
    bloodGroup: "O+",
    allergy: "None",
    medicalConditions: "None",
    phobia: "None",
    phrAddress: "3456790",
    ayushmanId: "674528391014",
    cases: 5,
    modeOfHelp: "Relief, Medical Aid",
    skills: ["First Aid", "Counseling", "Communication"],
    profession: ["Nurse", "Volunteer Coordinator"],
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "VOL22334",
    name: "Sanjana",
    gender: "Female",
    contact: "9876543219",
    status: "Verified",
    medicalProfile: "Valid",
    email: "sanjana@gmail.com",
    fullContact: "9876543219",
    address: "Sector 15, Noida, Uttar Pradesh Pincode-201301",
    bloodGroup: "O+",
    allergy: "None",
    medicalConditions: "None",
    phobia: "None",
    phrAddress: "3456790",
    ayushmanId: "674528391014",
    cases: 5,
    modeOfHelp: "Relief, Medical Aid",
    skills: ["First Aid", "Counseling", "Communication"],
    profession: ["Nurse", "Volunteer Coordinator"],
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "VOL22334",
    name: "Sanjana",
    gender: "Female",
    contact: "9876543219",
    status: "Verified",
    medicalProfile: "Valid",
    email: "sanjana@gmail.com",
    fullContact: "9876543219",
    address: "Sector 15, Noida, Uttar Pradesh Pincode-201301",
    bloodGroup: "O+",
    allergy: "None",
    medicalConditions: "None",
    phobia: "None",
    phrAddress: "3456790",
    ayushmanId: "674528391014",
    cases: 5,
    modeOfHelp: "Relief, Medical Aid",
    skills: ["First Aid", "Counseling", "Communication"],
    profession: ["Nurse", "Volunteer Coordinator"],
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "VOL22334",
    name: "Sanjana",
    gender: "Female",
    contact: "9876543219",
    status: "Verified",
    medicalProfile: "Valid",
    email: "sanjana@gmail.com",
    fullContact: "9876543219",
    address: "Sector 15, Noida, Uttar Pradesh Pincode-201301",
    bloodGroup: "O+",
    allergy: "None",
    medicalConditions: "None",
    phobia: "None",
    phrAddress: "3456790",
    ayushmanId: "674528391014",
    cases: 5,
    modeOfHelp: "Relief, Medical Aid",
    skills: ["First Aid", "Counseling", "Communication"],
    profession: ["Nurse", "Volunteer Coordinator"],
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "VOL22334",
    name: "Sanjana",
    gender: "Female",
    contact: "9876543219",
    status: "Verified",
    medicalProfile: "Valid",
    email: "sanjana@gmail.com",
    fullContact: "9876543219",
    address: "Sector 15, Noida, Uttar Pradesh Pincode-201301",
    bloodGroup: "O+",
    allergy: "None",
    medicalConditions: "None",
    phobia: "None",
    phrAddress: "3456790",
    ayushmanId: "674528391014",
    cases: 5,
    modeOfHelp: "Relief, Medical Aid",
    skills: ["First Aid", "Counseling", "Communication"],
    profession: ["Nurse", "Volunteer Coordinator"],
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

const governmentRecordsData = [
  {
    govId: "GOV/IND-01/2345",
    name: "Manohar Raj",
    aadharNo: "223300445566",
    lastProfileUpdate: "01.08.2024 11:00",
    lastActivity: "05.09.2024 16:00",
    zipCode: "141001",
  },
  {
    govId: "GOV/IND-01/2345",
    name: "Manohar Raj",
    aadharNo: "223300445566",
    lastProfileUpdate: "01.08.2024 11:00",
    lastActivity: "05.09.2024 16:00",
    zipCode: "141001",
  },
  {
    govId: "GOV/IND-01/2345",
    name: "Manohar Raj",
    aadharNo: "223300445566",
    lastProfileUpdate: "01.08.2024 11:00",
    lastActivity: "05.09.2024 16:00",
    zipCode: "141001",
  },
  {
    govId: "GOV/IND-01/2345",
    name: "Manohar Raj",
    aadharNo: "223300445566",
    lastProfileUpdate: "01.08.2024 11:00",
    lastActivity: "05.09.2024 16:00",
    zipCode: "141001",
  },
  {
    govId: "GOV/IND-01/2345",
    name: "Manohar Raj",
    aadharNo: "223300445566",
    lastProfileUpdate: "01.08.2024 11:00",
    lastActivity: "05.09.2024 16:00",
    zipCode: "141001",
  },
  {
    govId: "GOV/IND-01/2345",
    name: "Manohar Raj",
    aadharNo: "223300445566",
    lastProfileUpdate: "01.08.2024 11:00",
    lastActivity: "05.09.2024 16:00",
    zipCode: "141001",
  },
  {
    govId: "GOV/IND-01/2345",
    name: "Manohar Raj",
    aadharNo: "223300445566",
    lastProfileUpdate: "01.08.2024 11:00",
    lastActivity: "05.09.2024 16:00",
    zipCode: "141001",
  },
  {
    govId: "GOV/IND-01/2345",
    name: "Manohar Raj",
    aadharNo: "223300445566",
    lastProfileUpdate: "01.08.2024 11:00",
    lastActivity: "05.09.2024 16:00",
    zipCode: "141001",
  },
  {
    govId: "GOV/IND-01/2345",
    name: "Manohar Raj",
    aadharNo: "223300445566",
    lastProfileUpdate: "01.08.2024 11:00",
    lastActivity: "05.09.2024 16:00",
    zipCode: "141001",
  },
]

const reliefGroupsData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
]

const rescueRequestData = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
  { name: "May", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
]

const expenditureData = [
  { name: "Food", value: 600 },
  { name: "Medical", value: 400 },
  { name: "Shelter", value: 300 },
  { name: "Transport", value: 200 },
  { name: "Other", value: 100 },
]

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState("dashboard")
  const [activeTab, setActiveTab] = useState("portal")
  const [activeVerificationTab, setActiveVerificationTab] = useState("case")
  const [showCaseReport, setShowCaseReport] = useState(false)
  const [showVolunteerReport, setShowVolunteerReport] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [confirmationAction, setConfirmationAction] = useState(null)
  const [selectedCase, setSelectedCase] = useState(null)
  const [selectedVolunteer, setSelectedVolunteer] = useState(null)
  const [activeRequestTab, setActiveRequestTab] = useState("rescue")
  const [activeRecordTab, setActiveRecordTab] = useState("volunteers")
  const [showAllActivities, setShowAllActivities] = useState(false)
  const [rescueRequests, setRescueRequests] = useState(rescueRequestsData)
  const [showVolunteerProfile, setShowVolunteerProfile] = useState(false)
  const [selectedVolunteerRecord, setSelectedVolunteerRecord] = useState(null)

  const caseVerificationData = [
    {
      id: 1,
      concern: "Wildfire",
      location: "Jhadol",
      timeReceived: "05.09.2024 04:21 PM",
      ipAddress: "17.172.224.47",
      status: "pending",
    },
    {
      id: 2,
      concern: "Wildfire",
      location: "Jhadol",
      timeReceived: "05.09.2024 04:21 PM",
      ipAddress: "17.172.224.47",
      status: "pending",
    },
    {
      id: 3,
      concern: "Wildfire",
      location: "Jhadol",
      timeReceived: "05.09.2024 04:21 PM",
      ipAddress: "17.172.224.47",
      status: "pending",
    },
    {
      id: 4,
      concern: "Wildfire",
      location: "Jhadol",
      timeReceived: "05.09.2024 04:21 PM",
      ipAddress: "17.172.224.47",
      status: "pending",
    },
    {
      id: 5,
      concern: "Wildfire",
      location: "Jhadol",
      timeReceived: "05.09.2024 04:21 PM",
      ipAddress: "17.172.224.47",
      status: "pending",
    },
  ]

  const [caseData, setCaseData] = useState(caseVerificationData)

  const volunteerVerificationData = [
    {
      id: 1,
      name: "Ashish Winston",
      approvalStatus: "Pending",
      timeReceived: "06.09.2024 09:21 PM",
      status: "pending",
    },
    {
      id: 2,
      name: "Ashish Winston",
      approvalStatus: "Pending",
      timeReceived: "06.09.2024 09:21 PM",
      status: "pending",
    },
    {
      id: 3,
      name: "Ashish Winston",
      approvalStatus: "Pending",
      timeReceived: "06.09.2024 09:21 PM",
      status: "pending",
    },
    {
      id: 4,
      name: "Ashish Winston",
      approvalStatus: "Pending",
      timeReceived: "06.09.2024 09:21 PM",
      status: "pending",
    },
    {
      id: 5,
      name: "Ashish Winston",
      approvalStatus: "Pending",
      timeReceived: "06.09.2024 09:21 PM",
      status: "pending",
    },
  ]

  const [volunteerData, setVolunteerData] = useState(volunteerVerificationData)

  const handleAction = (action, type, item) => {
    setConfirmationAction({ action, type, item })
    setShowConfirmation(true)
  }

  const confirmAction = () => {
    const { action, type, item } = confirmationAction

    if (type === "case") {
      setCaseData((prev) =>
        prev.map((c) => (c.id === item.id ? { ...c, status: action === "approve" ? "approved" : "denied" } : c)),
      )
    } else if (type === "volunteer") {
      setVolunteerData((prev) =>
        prev.map((v) =>
          v.id === item.id
            ? {
                ...v,
                status: action === "approve" ? "approved" : "denied",
                approvalStatus: action === "approve" ? "Approved" : "Denied",
              }
            : v,
        ),
      )
    }

    setShowConfirmation(false)
    setConfirmationAction(null)
  }

  const handleCheckboxChange = (id, checked) => {
    setRescueRequests((prev) => prev.map((request) => (request.id === id ? { ...request, checked } : request)))
  }

  const renderConfirmationDialog = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex items-center mb-4">
          {confirmationAction?.action === "approve" ? (
            <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
          ) : (
            <XCircle className="w-6 h-6 text-red-600 mr-3" />
          )}
          <h2 className="text-lg font-semibold">
            Confirm {confirmationAction?.action === "approve" ? "Approval" : "Denial"}
          </h2>
        </div>
        <p className="text-gray-600 mb-6">
          Are you sure you want to {confirmationAction?.action} this {confirmationAction?.type}? This action cannot be
          undone.
        </p>
        <div className="flex space-x-3">
          <Button variant="outline" onClick={() => setShowConfirmation(false)} className="flex-1">
            Cancel
          </Button>
          <Button
            onClick={confirmAction}
            className={`flex-1 ${
              confirmationAction?.action === "approve"
                ? "bg-green-600 hover:bg-green-700"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            {confirmationAction?.action === "approve" ? "Approve" : "Deny"}
          </Button>
        </div>
      </div>
    </div>
  )

  const renderCaseReport = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-6 rounded-t-xl">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Emergency Case Report</h2>
              <p className="text-red-100">Case ID: CASE-{selectedCase?.id.toString().padStart(6, "0")}</p>
            </div>
            <Button variant="ghost" onClick={() => setShowCaseReport(false)} className="text-white hover:bg-white/20">
              ×
            </Button>
          </div>
        </div>

        {selectedCase && (
          <div className="p-6">
            {/* Status Banner */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <div className="flex items-center">
                <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="font-medium text-yellow-800">High Priority Emergency</span>
              </div>
            </div>

            {/* Main Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-red-500" />
                    Incident Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Concern Type</label>
                    <p className="text-lg font-semibold text-red-600">{selectedCase.concern}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Severity Level</label>
                    <Badge variant="destructive" className="bg-red-100 text-red-800">
                      Critical
                    </Badge>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Affected Area</label>
                    <p className="text-sm text-gray-900">2.5 km radius</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                    Location & Time
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <p className="text-lg font-semibold text-gray-900">{selectedCase.location}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Time Received</label>
                    <p className="text-sm text-gray-900 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {selectedCase.timeReceived}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">IP Address</label>
                    <p className="text-sm text-gray-900 font-mono">{selectedCase.ipAddress}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Description */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-green-500" />
                  Incident Description
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Emergency report regarding {selectedCase.concern.toLowerCase()} incident in {selectedCase.location}.
                  The situation requires immediate attention and coordinated response from multiple emergency services.
                  Initial reports indicate potential for rapid spread and significant impact on local communities.
                  Evacuation procedures may need to be initiated depending on weather conditions and fire behavior.
                </p>
              </CardContent>
            </Card>

            {/* Resources Required */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Users className="w-5 h-5 mr-2 text-purple-500" />
                  Required Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-red-50 p-3 rounded-lg">
                    <h4 className="font-medium text-red-800">Fire Department</h4>
                    <p className="text-sm text-red-600">3 Fire Trucks, 15 Personnel</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h4 className="font-medium text-blue-800">Medical Team</h4>
                    <p className="text-sm text-blue-600">2 Ambulances, Medical Staff</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="font-medium text-green-800">Evacuation Support</h4>
                    <p className="text-sm text-green-600">Transport Vehicles, Shelter</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3">
              <Button variant="outline" onClick={() => setShowCaseReport(false)}>
                Close
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )

  const renderVolunteerReport = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-t-xl">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Volunteer Profile Report</h2>
              <p className="text-blue-100">Volunteer ID: VOL-{selectedVolunteer?.id.toString().padStart(6, "0")}</p>
            </div>
            <Button
              variant="ghost"
              onClick={() => setShowVolunteerReport(false)}
              className="text-white hover:bg-white/20"
            >
              ×
            </Button>
          </div>
        </div>

        {selectedVolunteer && (
          <div className="p-6">
            {/* Profile Header */}
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                {selectedVolunteer.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{selectedVolunteer.name}</h3>
                <p className="text-gray-600">Emergency Response Volunteer</p>
                <Badge
                  className={`mt-1 ${
                    selectedVolunteer.approvalStatus === "Pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : selectedVolunteer.approvalStatus === "Approved"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                  }`}
                >
                  {selectedVolunteer.approvalStatus}
                </Badge>
              </div>
            </div>

            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <User className="w-5 h-5 mr-2 text-blue-500" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <p className="text-lg font-semibold text-gray-900">{selectedVolunteer.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                    <p className="text-sm text-gray-900">28 years</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <p className="text-sm text-gray-900 flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      Jhadol, Rajasthan
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-green-500" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <p className="text-sm text-gray-900 flex items-center">
                      <Phone className="w-4 h-4 mr-1" />
                      +91 98765 43210
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <p className="text-sm text-gray-900 flex items-center">
                      <Mail className="w-4 h-4 mr-1" />
                      ashish.winston@email.com
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Application Date</label>
                    <p className="text-sm text-gray-900 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {selectedVolunteer.timeReceived}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Skills & Experience */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-purple-500" />
                  Skills & Qualifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  {[
                    "First Aid Certified",
                    "Emergency Response",
                    "Local Knowledge",
                    "Communication",
                    "Physical Fitness",
                    "Team Leadership",
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="bg-blue-50 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium text-center"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <h4 className="font-medium text-gray-700 mb-2">Previous Experience</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    2 years of volunteer experience with local NGOs. Participated in flood relief operations in 2022 and
                    wildfire response in 2023. Demonstrated excellent coordination skills and ability to work under
                    pressure.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Verification Status */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                  Verification Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="font-medium text-green-800">Background Check</h4>
                    <p className="text-sm text-green-600">✓ Completed - Clear</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="font-medium text-green-800">Document Verification</h4>
                    <p className="text-sm text-green-600">✓ All documents verified</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h4 className="font-medium text-blue-800">Availability</h4>
                    <p className="text-sm text-blue-600">Weekends & Emergency</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3">
              <Button variant="outline" onClick={() => setShowVolunteerReport(false)}>
                Close
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Download className="w-4 h-4 mr-2" />
                Export Profile
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )

  const renderProfileModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-t-xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                AW
              </div>
              <div>
                <h2 className="text-2xl font-bold">Admin Profile</h2>
                <p className="text-blue-100">System Administrator</p>
              </div>
            </div>
            <Button variant="ghost" onClick={() => setShowProfile(false)} className="text-white hover:bg-white/20">
              ×
            </Button>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <User className="w-5 h-5 mr-2 text-blue-500" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <p className="text-sm text-gray-900">Admin Winston</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                  <p className="text-sm text-gray-900">System Administrator</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                  <p className="text-sm text-gray-900">Emergency Response</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-green-500" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <p className="text-sm text-gray-900">admin@emergency.gov.in</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <p className="text-sm text-gray-900">+91 98765 12345</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Login</label>
                  <p className="text-sm text-gray-900">Today, 10:30 AM</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Shield className="w-5 h-5 mr-2 text-purple-500" />
                Permissions & Access
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Full System Access",
                  "User Management",
                  "Case Verification",
                  "Report Generation",
                  "Settings Control",
                  "Emergency Override",
                ].map((permission, index) => (
                  <div key={index} className="bg-green-50 text-green-800 px-3 py-2 rounded-lg text-sm font-medium">
                    ✓ {permission}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end space-x-3">
            <Button variant="outline" onClick={() => setShowProfile(false)}>
              Close
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Edit Profile</Button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderVerificationsContent = () => (
    <div className="space-y-6">
      {/* Verification Tabs */}
      <div className="bg-white border-b border-gray-200">
        <nav className="flex space-x-8">
          {[
            { id: "case", label: "Case" },
            { id: "volunteers", label: "Volunteers" },
            { id: "community", label: "Community Leader" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveVerificationTab(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
                activeVerificationTab === tab.id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Case Verification Table */}
      {activeVerificationTab === "case" && (
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Concern</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Location</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Time Received</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">IP Address</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Incident Report</th>
                  </tr>
                </thead>
                <tbody>
                  {caseData.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-6 text-sm text-gray-900">{item.concern}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{item.location}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{item.timeReceived}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{item.ipAddress}</td>
                      <td className="py-4 px-6">
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            className="bg-blue-600 hover:bg-blue-700 text-white"
                            onClick={() => {
                              setSelectedCase(item)
                              setShowCaseReport(true)
                            }}
                          >
                            View
                          </Button>
                          {item.status === "pending" && (
                            <>
                              <Button
                                size="sm"
                                variant="destructive"
                                className="bg-red-500 hover:bg-red-600"
                                onClick={() => handleAction("deny", "case", item)}
                              >
                                Deny
                              </Button>
                              <Button
                                size="sm"
                                className="bg-green-600 hover:bg-green-700 text-white"
                                onClick={() => handleAction("approve", "case", item)}
                              >
                                Approve
                              </Button>
                            </>
                          )}
                          {item.status === "approved" && (
                            <Badge className="bg-green-100 text-green-800">Approved</Badge>
                          )}
                          {item.status === "denied" && <Badge className="bg-red-100 text-red-800">Denied</Badge>}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Volunteers Verification Table */}
      {activeVerificationTab === "volunteers" && (
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Name</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Approval Status</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Time Received</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Profile Report</th>
                  </tr>
                </thead>
                <tbody>
                  {volunteerData.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-6 text-sm text-gray-900">{item.name}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{item.approvalStatus}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{item.timeReceived}</td>
                      <td className="py-4 px-6">
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            className="bg-blue-600 hover:bg-blue-700 text-white"
                            onClick={() => {
                              setSelectedVolunteer(item)
                              setShowVolunteerReport(true)
                            }}
                          >
                            View
                          </Button>
                          {item.status === "pending" && (
                            <>
                              <Button
                                size="sm"
                                variant="destructive"
                                className="bg-red-500 hover:bg-red-600"
                                onClick={() => handleAction("deny", "volunteer", item)}
                              >
                                Deny
                              </Button>
                              <Button
                                size="sm"
                                className="bg-green-600 hover:bg-green-700 text-white"
                                onClick={() => handleAction("approve", "volunteer", item)}
                              >
                                Approve
                              </Button>
                            </>
                          )}
                          {item.status === "approved" && (
                            <Badge className="bg-green-100 text-green-800">Approved</Badge>
                          )}
                          {item.status === "denied" && <Badge className="bg-red-100 text-red-800">Denied</Badge>}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Community Leader Verification */}
      {activeVerificationTab === "community" && (
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <Users className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Community Leader Verification</h3>
            <p className="text-gray-500">No pending community leader applications</p>
          </div>
        </div>
      )}
    </div>
  )

  const renderDashboardContent = () => (
    <div className="space-y-6">
      {/* Stats Cards Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Alert Response Card */}
        <Card className="bg-gradient-to-br from-blue-400 to-blue-600 text-white border-0 hover:scale-105 transition-transform duration-300 shadow-md">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <CardTitle className="text-sm font-medium">Alert Response</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Solved</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>In progress</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Unresolved</span>
                </div>
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium">Cases</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Community Contributions */}
        <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white border-0 hover:scale-105 transition-transform duration-300 shadow-md">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
              <CardTitle className="text-sm font-medium">Community Contributions</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Manpower</span>
              </div>
              <Progress value={75} className="h-1 bg-white/20" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Aids</span>
              </div>
              <Progress value={45} className="h-1 bg-white/20" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Donation</span>
              </div>
              <Progress value={60} className="h-1 bg-white/20" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Others</span>
              </div>
              <Progress value={30} className="h-1 bg-white/20" />
            </div>
          </CardContent>
        </Card>

        {/* Total Alerts */}
        <Card className="bg-gradient-to-br from-blue-400 to-blue-600 text-white border-0 hover:scale-105 transition-transform duration-300 shadow-md">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              <CardTitle className="text-sm font-medium">Total Alerts</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-4">4500</div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="text-center">
                <div className="font-medium">2.1K</div>
                <div className="text-white/80">Rajasthan</div>
              </div>
              <div className="text-center">
                <div className="font-medium">1.4K</div>
                <div className="text-white/80">Kerala</div>
              </div>
              <div className="text-center">
                <div className="font-medium">1.1K</div>
                <div className="text-white/80">Assam</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Rescuers */}
        <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white border-0 hover:scale-105 transition-transform duration-300 shadow-md">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <CardTitle className="text-sm font-medium">Active Rescuers</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">35,000+</div>
            <div className="flex items-center justify-between text-sm">
              <span>15432 Online</span>
              <span className="text-green-300">+12.36%</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* News Feed */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <CardTitle className="text-sm font-medium text-gray-700">News Feed</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 max-h-[400px] overflow-y-auto">
            {newsItems.map((item, index) => (
              <div key={index} className="space-y-2">
                <p className="text-sm text-gray-800 leading-relaxed">
                  <span className="font-medium">{item.date}</span> - {item.content}{" "}
                  <span className="text-blue-600 cursor-pointer hover:underline">{item.link}</span>
                </p>
                <p className="text-xs text-gray-500">{item.source}</p>
                {index < newsItems.length - 1 && <hr className="my-3" />}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <CardTitle className="text-sm font-medium text-gray-700">Activity</CardTitle>
              </div>
              <Button
                variant="link"
                className="text-blue-600 text-sm p-0"
                onClick={() => setShowAllActivities(!showAllActivities)}
              >
                {showAllActivities ? "Show Less" : "View All"}
              </Button>
            </div>
          </CardHeader>
          <CardContent className="max-h-[400px] overflow-y-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs text-gray-500 border-b">
                    <th className="pb-2">Case ID</th>
                    <th className="pb-2">Status</th>
                    <th className="pb-2">Response</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {displayedActivities.map((item, index) => (
                    <tr key={index} className="border-b last:border-b-0">
                      <td className="py-3">
                        <div>
                          <div className="font-medium">{item.caseId}</div>
                          <div className="text-xs text-gray-500">{item.type}</div>
                        </div>
                      </td>
                      <td className="py-3">
                        <div className="space-y-1">
                          {item.status.map((status, idx) => (
                            <div key={idx} className="text-xs text-gray-600">
                              {status}
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="py-3">
                        <div className="space-y-1">
                          {item.responses.map((response, idx) => (
                            <div key={idx} className="text-xs text-gray-600">
                              {response}
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Cards Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gathered Target Zones */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-700">Gathered Target Zones</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {targetZones.map((zone, index) => (
                <Badge key={index} variant="destructive" className="bg-red-500 hover:bg-red-600">
                  {zone}
                </Badge>
              ))}
              <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600">
                <Plus className="w-4 h-4 mr-1" />
                Add Tags
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Incoming Messages */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-blue-600">Incoming Messages</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-sm">
              <span className="font-medium">23</span> Requests received
            </div>
            <div className="text-sm">
              <span className="font-medium">20</span> Tasks completed
            </div>
            <div className="text-sm">
              <span className="font-medium">3</span> pending verification
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderRequestContent = () => (
    <div className="space-y-6">
      {/* Request Tabs */}
      <div className="bg-white border-b border-gray-200">
        <nav className="flex space-x-8">
          {[
            { id: "rescue", label: "Rescue" },
            { id: "relief", label: "Relief" },
            { id: "others", label: "Others" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveRequestTab(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
                activeRequestTab === tab.id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Rescue Content */}
      {activeRequestTab === "rescue" && (
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700 w-12"></th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Subject</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Time Received</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Category</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Location</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Verification</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Sender</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Response</th>
                  </tr>
                </thead>
                <tbody>
                  {rescueRequests.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-6">
                        <Checkbox
                          checked={item.checked}
                          onCheckedChange={(checked) => handleCheckboxChange(item.id, checked)}
                        />
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900">{item.subject}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{item.timeReceived}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{item.category}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{item.location}</td>
                      <td className="py-4 px-6">
                        <Badge
                          className={`${
                            item.verification === "Pending"
                              ? "bg-orange-100 text-orange-800"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {item.verification}
                        </Badge>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900">{item.sender}</td>
                      <td className="py-4 px-6">
                        {item.response === "Pending" ? (
                          <Badge className="bg-orange-100 text-orange-800">{item.response}</Badge>
                        ) : (
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                            {item.response}
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Relief Content */}
      {activeRequestTab === "relief" && (
        <div className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Total Groups */}
            <Card className="bg-gradient-to-br from-blue-400 to-blue-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Users className="w-8 h-8" />
                  </div>
                  <div className="text-right">
                    <h3 className="text-lg font-medium">Total Groups</h3>
                    <p className="text-3xl font-bold">31</p>
                  </div>
                </div>
                <div className="flex items-center justify-center mb-4">
                  <div className="relative w-24 h-24">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={[
                            { name: "Medicines", value: 15, fill: "#10b981" },
                            { name: "Food", value: 10, fill: "#f59e0b" },
                            { name: "Others", value: 6, fill: "#ef4444" },
                          ]}
                          dataKey="value"
                          cx="50%"
                          cy="50%"
                          innerRadius={20}
                          outerRadius={40}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-medium">Groups</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span>Medicines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span>Food</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span>Others</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Total Rescue Request */}
            <Card className="bg-gradient-to-br from-blue-400 to-blue-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <FileText className="w-8 h-8" />
                  </div>
                  <div className="text-right">
                    <h3 className="text-lg font-medium">Total Rescue Request</h3>
                    <p className="text-3xl font-bold">112</p>
                  </div>
                </div>
                <div className="h-24 mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={rescueRequestData.slice(0, 7)}>
                      <Bar dataKey="uv" fill="rgba(255,255,255,0.8)" radius={[2, 2, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span>Completed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span>In Operation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    <span>Pending</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Current Expenditure */}
            <Card className="bg-gradient-to-br from-blue-400 to-blue-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <CreditCard className="w-8 h-8" />
                  </div>
                  <div className="text-right">
                    <h3 className="text-lg font-medium">Current Expenditure</h3>
                  </div>
                </div>
                <div className="h-24 mb-4">
                  <div className="grid grid-cols-2 gap-1 h-full">
                    <div className="bg-green-400 rounded flex items-center justify-center text-xs font-medium">
                      Food
                    </div>
                    <div className="bg-purple-400 rounded flex items-center justify-center text-xs font-medium">
                      Sanitation and medicines
                    </div>
                    <div className="bg-yellow-400 rounded flex items-center justify-center text-xs font-medium text-black">
                      Water
                    </div>
                    <div className="bg-red-400 rounded"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Relief Requests Table */}
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-gray-50">
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Id</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Time Received</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Category</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Location</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Status</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Response</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Commits</th>
                      <th className="text-right py-4 px-6 text-sm font-medium text-gray-700">
                        <Search className="w-4 h-4 inline" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {reliefRequestsData.map((item, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-4 px-6 text-sm text-gray-900 font-medium">{item.id}</td>
                        <td className="py-4 px-6 text-sm text-gray-900">{item.timeReceived}</td>
                        <td className="py-4 px-6 text-sm text-gray-900">{item.category}</td>
                        <td className="py-4 px-6 text-sm text-gray-900">{item.location}</td>
                        <td className="py-4 px-6">
                          <Badge
                            className={`${
                              item.status === "Awaiting"
                                ? "bg-yellow-100 text-yellow-800"
                                : item.status === "Pending"
                                  ? "bg-orange-100 text-orange-800"
                                  : item.status === "In Operation"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-green-100 text-green-800"
                            }`}
                          >
                            {item.status}
                          </Badge>
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-900">{item.response}</td>
                        <td className="py-4 px-6 text-sm text-gray-900 font-medium">{item.commits}</td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-1">
                            <Button size="sm" variant="ghost" className="text-blue-600 hover:text-blue-700 p-1">
                              <Eye className="w-4 h-4" />
                              <span className="text-xs ml-1">View</span>
                            </Button>
                            <Button size="sm" variant="ghost" className="text-blue-600 hover:text-blue-700 p-1">
                              <UserPlus className="w-4 h-4" />
                              <span className="text-xs ml-1">Add</span>
                            </Button>
                            <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700 p-1">
                              <Trash2 className="w-4 h-4" />
                              <span className="text-xs ml-1">Remove</span>
                            </Button>
                            <Button size="sm" variant="ghost" className="text-blue-600 hover:text-blue-700 p-1">
                              <MapPin className="w-4 h-4" />
                              <span className="text-xs ml-1">Map</span>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Others Content */}
      {activeRequestTab === "others" && (
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <FileText className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Other Requests</h3>
            <p className="text-gray-500">No other requests available</p>
          </div>
        </div>
      )}
    </div>
  )

  const renderRecordsContent = () => (
    <div className="space-y-6">
      {/* Records Tabs */}
      <div className="bg-white border-b border-gray-200">
        <nav className="flex space-x-8">
          {[
            { id: "volunteers", label: "Volunteers" },
            { id: "government", label: "Government" },
            { id: "others", label: "Others" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveRecordTab(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
                activeRecordTab === tab.id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Volunteers Records */}
      {activeRecordTab === "volunteers" && (
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-blue-200">
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">ID</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Name</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Gender</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Contact</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Status</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Medical Profile</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700"></th>
                  </tr>
                </thead>
                <tbody>
                  {volunteerRecordsData.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-blue-50">
                      <td className="py-4 px-6 text-sm text-gray-900 font-medium">{item.id}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{item.name}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{item.gender}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{item.contact}</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-green-600 font-medium">{item.status}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900">{item.medicalProfile}</td>
                      <td className="py-4 px-6">
                        <Button
                          size="sm"
                          className="bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => {
                            setSelectedVolunteerRecord(item)
                            setShowVolunteerProfile(true)
                          }}
                        >
                          Check
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Government Records */}
      {activeRecordTab === "government" && (
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-blue-200">
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Govt. ID</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Name</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Aadhar No</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Last Profile Update</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Last Activity</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">ZIP Code</th>
                  </tr>
                </thead>
                <tbody>
                  {governmentRecordsData.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-blue-50">
                      <td className="py-4 px-6 text-sm text-gray-900 font-medium">{item.govId}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{item.name}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{item.aadharNo}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{item.lastProfileUpdate}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{item.lastActivity}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{item.zipCode}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Others Records */}
      {activeRecordTab === "others" && (
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <Database className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Other Records</h3>
            <p className="text-gray-500">No other records available</p>
          </div>
        </div>
      )}
    </div>
  )

  const renderSettingsContent = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Settings className="w-5 h-5 mr-2 text-blue-500" />
              General Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Email Notifications</h4>
                <p className="text-sm text-gray-500">Receive email alerts for new cases</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">SMS Alerts</h4>
                <p className="text-sm text-gray-500">Emergency SMS notifications</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Auto-Approval</h4>
                <p className="text-sm text-gray-500">Automatically approve verified cases</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Lock className="w-5 h-5 mr-2 text-red-500" />
              Security Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Two-Factor Authentication</h4>
                <p className="text-sm text-gray-500">Add extra security to your account</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Session Timeout</h4>
                <p className="text-sm text-gray-500">Auto logout after inactivity</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <Button variant="outline" className="w-full">
              Change Password
            </Button>
          </CardContent>
        </Card>

        {/* System Preferences */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Palette className="w-5 h-5 mr-2 text-purple-500" />
              System Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>Light Mode</option>
                <option>Dark Mode</option>
                <option>Auto</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>English</option>
                <option>Hindi</option>
                <option>Regional Languages</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>IST (UTC+5:30)</option>
                <option>UTC</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Data Management */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Globe className="w-5 h-5 mr-2 text-green-500" />
              Data Management
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Export All Data
            </Button>
            <Button variant="outline" className="w-full">
              Backup Settings
            </Button>
            <Button variant="outline" className="w-full">
              Clear Cache
            </Button>
            <Separator />
            <Button variant="destructive" className="w-full">
              Reset to Defaults
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderHelpContent = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Help */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <LifeBuoy className="w-5 h-5 mr-2 text-blue-500" />
              Quick Help
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800">Getting Started</h4>
                <p className="text-sm text-blue-600">Learn the basics of the emergency response system</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-800">Case Management</h4>
                <p className="text-sm text-green-600">How to handle and verify emergency cases</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <h4 className="font-medium text-purple-800">Volunteer Approval</h4>
                <p className="text-sm text-purple-600">Process for approving volunteer applications</p>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <h4 className="font-medium text-orange-800">System Settings</h4>
                <p className="text-sm text-orange-600">Configure system preferences and security</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Documentation */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-green-500" />
              Documentation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full justify-start">
              <FileText className="w-4 h-4 mr-2" />
              User Manual
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Shield className="w-4 h-4 mr-2" />
              Security Guidelines
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Emergency Protocols
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Users className="w-4 h-4 mr-2" />
              Team Management Guide
            </Button>
            <Separator />
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              <Download className="w-4 h-4 mr-2" />
              Download All Docs
            </Button>
          </CardContent>
        </Card>

        {/* Support Contact */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <MessageCircle className="w-5 h-5 mr-2 text-purple-500" />
              Contact Support
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <Phone className="w-5 h-5 text-green-600 mr-3" />
                <div>
                  <h4 className="font-medium">Emergency Hotline</h4>
                  <p className="text-sm text-gray-600">+91 1800-XXX-XXXX</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <Mail className="w-5 h-5 text-blue-600 mr-3" />
                <div>
                  <h4 className="font-medium">Technical Support</h4>
                  <p className="text-sm text-gray-600">support@emergency.gov.in</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <MessageCircle className="w-5 h-5 text-purple-600 mr-3" />
                <div>
                  <h4 className="font-medium">Live Chat</h4>
                  <p className="text-sm text-gray-600">Available 24/7</p>
                </div>
              </div>
            </div>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">Start Live Chat</Button>
          </CardContent>
        </Card>

        {/* System Status */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Activity className="w-5 h-5 mr-2 text-orange-500" />
              System Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Database Connection</span>
                <Badge className="bg-green-100 text-green-800">Online</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">API Services</span>
                <Badge className="bg-green-100 text-green-800">Operational</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Notification System</span>
                <Badge className="bg-green-100 text-green-800">Active</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Backup Status</span>
                <Badge className="bg-blue-100 text-blue-800">Last: 2 hours ago</Badge>
              </div>
            </div>
            <Separator />
            <div className="text-center">
              <p className="text-sm text-gray-600">System Version: v2.1.0</p>
              <p className="text-xs text-gray-500">Last Updated: September 2024</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderPageContent = () => {
    switch (activeNav) {
      case "dashboard":
        return renderDashboardContent()
      case "requests":
        return renderRequestContent()
      case "records":
        return renderRecordsContent()
      case "reports":
        return (
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <BarChart3 className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Reports</h3>
              <p className="text-gray-500">Reports section coming soon...</p>
            </div>
          </div>
        )
      case "team":
        return (
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <Users className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Team</h3>
              <p className="text-gray-500">Team management coming soon...</p>
            </div>
          </div>
        )
      case "verifications":
        return renderVerificationsContent()
      case "settings":
        return renderSettingsContent()
      case "help":
        return renderHelpContent()
      default:
        return renderDashboardContent()
    }
  }

  const allActivityData = [
    {
      caseId: "060924-5",
      type: "Wildlife",
      status: ["Received", "Approved", "Status Verified"],
      responses: ["Rescue Team dispatched", "Sending Fire Department", "Police Informed", "Sending Medical Help"],
    },
    {
      caseId: "060924-6",
      type: "Landslide",
      status: ["Received", "Approved", "Status Verified"],
      responses: ["Rescue Team dispatched", "Relief Released", "Police On Site", "Medical Help Sent"],
    },
    {
      caseId: "060924-7",
      type: "Flood",
      status: ["Received", "Under Review"],
      responses: ["Assessment Team dispatched", "Local authorities notified"],
    },
    {
      caseId: "060924-8",
      type: "Earthquake",
      status: ["Received", "Approved", "Status Verified"],
      responses: ["Emergency services deployed", "Medical teams on standby", "Evacuation initiated"],
    },
    {
      caseId: "060924-9",
      type: "Cyclone",
      status: ["Received", "Approved"],
      responses: ["Weather monitoring active", "Coastal areas alerted"],
    },
  ]

  const displayedActivities = showAllActivities ? allActivityData : activityData

  const renderVolunteerProfilePanel = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        {selectedVolunteerRecord && (
          <>
            {/* Header with decorative background */}
            <div className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-6 rounded-t-xl relative overflow-hidden">
              {/* Decorative icons */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-2 left-4">
                  <Shield className="w-6 h-6" />
                </div>
                <div className="absolute top-4 right-8">
                  <Activity className="w-5 h-5" />
                </div>
                <div className="absolute top-8 left-12">
                  <Users className="w-4 h-4" />
                </div>
                <div className="absolute top-6 right-4">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div className="absolute bottom-4 left-6">
                  <LifeBuoy className="w-5 h-5" />
                </div>
                <div className="absolute bottom-6 right-10">
                  <Shield className="w-4 h-4" />
                </div>
                <div className="absolute bottom-2 right-4">
                  <Activity className="w-6 h-6" />
                </div>
                <div className="absolute top-12 left-20">
                  <Users className="w-5 h-5" />
                </div>
              </div>

              <div className="relative flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full overflow-hidden mr-4">
                    <img
                      src={selectedVolunteerRecord.avatar || "/placeholder.svg"}
                      alt={selectedVolunteerRecord.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-white">
                    <h2 className="text-xl font-bold">Profile</h2>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  onClick={() => setShowVolunteerProfile(false)}
                  className="text-white hover:bg-white/20"
                >
                  ×
                </Button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Personal Details */}
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-4">Personal Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Full name</span>
                    <span className="font-medium text-gray-900">{selectedVolunteerRecord.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email Id</span>
                    <span className="font-medium text-gray-900">{selectedVolunteerRecord.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Contact</span>
                    <span className="font-medium text-gray-900">{selectedVolunteerRecord.fullContact}</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-gray-600">Address</span>
                    <span className="font-medium text-gray-900 text-right max-w-[200px]">
                      {selectedVolunteerRecord.address}
                    </span>
                  </div>
                </div>
              </div>

              {/* Medical Profile */}
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-4">Medical Profile</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Blood Group</span>
                    <span className="font-medium text-gray-900">{selectedVolunteerRecord.bloodGroup}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Allergy</span>
                    <span className="font-medium text-gray-900">{selectedVolunteerRecord.allergy}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Medical Conditions</span>
                    <span className="font-medium text-gray-900">{selectedVolunteerRecord.medicalConditions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Phobia</span>
                    <span className="font-medium text-gray-900">{selectedVolunteerRecord.phobia}</span>
                  </div>
                </div>
              </div>

              {/* PHR Details */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">PHR Address</span>
                    <span className="font-medium text-gray-900">{selectedVolunteerRecord.phrAddress}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ayushman Bharat Health Profile No</span>
                    <span className="font-medium text-gray-900">{selectedVolunteerRecord.ayushmanId}</span>
                  </div>
                </div>
              </div>

              {/* History */}
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-4">History</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cases</span>
                    <span className="font-bold text-gray-900 text-xl">{selectedVolunteerRecord.cases}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mode of help</span>
                    <span className="font-medium text-gray-900">{selectedVolunteerRecord.modeOfHelp}</span>
                  </div>
                </div>
              </div>

              {/* Volunteering Skills */}
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-4">Volunteering Skills</h3>
                <div className="space-y-2">
                  {selectedVolunteerRecord.skills.map((skill, index) => (
                    <div key={index} className="text-gray-700 font-medium">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Profession */}
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-4">Profession</h3>
                <div className="space-y-2">
                  {selectedVolunteerRecord.profession.map((prof, index) => (
                    <div key={index} className="text-gray-700 font-medium">
                      {prof}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-4">
        {/* Logo */}
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-8">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col space-y-4">
          {navigationItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                  activeNav === item.id
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                }`}
                title={item.label}
              >
                <Icon className="w-6 h-6" />
              </button>
            )
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-semibold text-gray-900">
                {activeNav === "verifications"
                  ? "Verifications"
                  : activeNav === "settings"
                    ? "Settings"
                    : activeNav === "help"
                      ? "Help"
                      : activeNav === "requests"
                        ? "Requests"
                        : activeNav === "records"
                          ? "Records"
                          : "Dashboard"}
              </h1>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Search..." className="pl-10 w-80 bg-gray-50 border-gray-200" />
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                Edit section
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Add Charts
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setShowProfile(true)}>
                <User className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Tabs - Only show on Dashboard */}
        {activeNav === "dashboard" && (
          <div className="bg-white border-b border-gray-200 px-6">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
                    tab.active || activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.label}
                  {tab.badge && (
                    <Badge variant="secondary" className="bg-red-100 text-red-600 text-xs">
                      {tab.badge}
                    </Badge>
                  )}
                </button>
              ))}
            </nav>
          </div>
        )}

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">{renderPageContent()}</main>
      </div>

      {/* Modals */}
      {showCaseReport && renderCaseReport()}
      {showVolunteerReport && renderVolunteerReport()}
      {showProfile && renderProfileModal()}
      {showConfirmation && renderConfirmationDialog()}
      {showVolunteerProfile && renderVolunteerProfilePanel()}
    </div>
  )
}
