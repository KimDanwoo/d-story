import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import '../../components/icon/icon'

const Template = () => html`
  <div>
    <p class="trg-14 my-5 text-[#777777]">
      피터팬 플랫폼에서 사용되는 아이콘을 정의합니다.
    </p>
    <h2 class="tbd-16">01_Users</h2>
    <div
      class="grid grid-cols-6 gap-y-[20px] place-items-center mb-[40px] py-[20px] px-[20px]"
    >
      <div class="flex flex-col w-[60px] justify-center items-center">
        <icon name="User"></icon>
        <div class="trg-12">User</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="UserFill"></icon>
        <div class="trg-12">UserFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Gender"></icon>
        <div class="trg-12">Gender</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Roommate"></icon>
        <div class="trg-12">Roommate</div>
      </div>
    </div>
    <h2 class="tbd-16">02_Arrows</h2>
    <div
      class="grid grid-cols-6 gap-y-[20px] place-items-center mb-[40px] py-[20px] px-[20px]"
    >
      <div class="flex flex-col w-[60px] justify-center items-center">
        <icon name="ArrowExchangeHorizontal"></icon>
        <div class="trg-12">ArrowExchangeHorizontal</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="ArrowExchangeVertical"></icon>
        <div class="trg-12">ArrowExchangeVertical</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="ArrowDown"></icon>
        <div class="trg-12">ArrowDown</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="ArrowUp"></icon>
        <div class="trg-12">ArrowUp</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="ArrowRight"></icon>
        <div class="trg-12">ArrowRight</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="ArrowLeft"></icon>
        <div class="trg-12">ArrowLeft</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="ShevronDown"></icon>
        <div class="trg-12">ShevronDown</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="ShevronUp"></icon>
        <div class="trg-12">ShevronUp</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="ShevronRight"></icon>
        <div class="trg-12">ShevronRight</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="ShevronLeft"></icon>
        <div class="trg-12">ShevronLeft</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="ShevronDoubleLeft"></icon>
        <div class="trg-12">ShevronDoubleLeft</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="ShevronDoubleRight"></icon>
        <div class="trg-12">ShevronDoubleRight</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Repeat"></icon>
        <div class="trg-12">Repeat</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Reset"></icon>
        <div class="trg-12">Reset</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="ZoomIn"></icon>
        <div class="trg-12">ZoomIn</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Download"></icon>
        <div class="trg-12">Download</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Upload"></icon>
        <div class="trg-12">Upload</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Share"></icon>
        <div class="trg-12">Share</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="CaretDownFill"></icon>
        <div class="trg-12">CaretDownFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="CaretDownFillSmall"></icon>
        <div class="trg-12">CaretDownFillSmall</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="ChangeMeasure"></icon>
        <div class="trg-12">ChangeMeasure</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="ChangeSqaremeter"></icon>
        <div class="trg-12">ChangeSqaremeter</div>
      </div>
    </div>

    <h2 class="tbd-16">03_Interfaces</h2>
    <div
      class="grid grid-cols-6 gap-y-[20px] place-items-center mb-[40px] py-[20px] px-[20px]"
    >
      <div class="flex flex-col w-[60px] justify-center items-center">
        <icon name="Backspace"></icon>
        <div class="trg-12">Backspace</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="SettingFill"></icon>
        <div class="trg-12">SettingFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Setting"></icon>
        <div class="trg-12">Setting</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="HamburgerMenu"></icon>
        <div class="trg-12">HamburgerMenu</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Menu"></icon>
        <div class="trg-12">Menu</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="List"></icon>
        <div class="trg-12">List</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="MenuFill"></icon>
        <div class="trg-12">MenuFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="ListFill"></icon>
        <div class="trg-12">ListFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="ImageView"></icon>
        <div class="trg-12">ImageView</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Search"></icon>
        <div class="trg-12">Search</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Filter"></icon>
        <div class="trg-12">Filter</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="HeartFill"></icon>
        <div class="trg-12">HeartFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Heart"></icon>
        <div class="trg-12">Heart</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Check"></icon>
        <div class="trg-12">Check</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="CheckCircleFill"></icon>
        <div class="trg-12">CheckCircleFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Calender"></icon>
        <div class="trg-12">Calender</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Calender02"></icon>
        <div class="trg-12">Calender02</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="CameraFill"></icon>
        <div class="trg-12">CameraFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Camera"></icon>
        <div class="trg-12">Camera</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Complain"></icon>
        <div class="trg-12">Complain</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="File"></icon>
        <div class="trg-12">File</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Plus"></icon>
        <div class="trg-12">Plus</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Minus"></icon>
        <div class="trg-12">Minus</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Xmark"></icon>
        <div class="trg-12">Xmark</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="DotMenuHorizon"></icon>
        <div class="trg-12">DotMenuHorizon</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="DotMenuVertical"></icon>
        <div class="trg-12">DotMenuVertical</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Home"></icon>
        <div class="trg-12">Home</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="HomeFill"></icon>
        <div class="trg-12">HomeFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="HomeCheck"></icon>
        <div class="trg-12">HomeCheck</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="RoomOut"></icon>
        <div class="trg-12">RoomOut</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="RoomRegeister"></icon>
        <div class="trg-12">RoomRegeister</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="RoomManage"></icon>
        <div class="trg-12">RoomManage</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="RoomSearch"></icon>
        <div class="trg-12">RoomSearch</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="HomeSearch"></icon>
        <div class="trg-12">HomeSearch</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="HomeHeart"></icon>
        <div class="trg-12">HomeHeart</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="HomeTime"></icon>
        <div class="trg-12">HomeTime</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="HomeCall"></icon>
        <div class="trg-12"></div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Help"></icon>
        <div class="trg-12">Help</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Password"></icon>
        <div class="trg-12">Password</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Information"></icon>
        <div class="trg-12">Information</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="InformationFill"></icon>
        <div class="trg-12">InformationFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Image"></icon>
        <div class="trg-12">Image</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="ImageSlash"></icon>
        <div class="trg-12">ImageSlash</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="CallFill"></icon>
        <div class="trg-12">CallFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Call"></icon>
        <div class="trg-12">Call</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="">Subcall</icon>
        <div class="trg-12">Subcall</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="MessageFill"></icon>
        <div class="trg-12">MessageFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Message"></icon>
        <div class="trg-12">Message</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="InquiryFill"></icon>
        <div class="trg-12">InquiryFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Inquiry"></icon>
        <div class="trg-12">Inquiry</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="ChatFill"></icon>
        <div class="trg-12">ChatFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Chat"></icon>
        <div class="trg-12">Chat</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="SendFill"></icon>
        <div class="trg-12">SendFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Send"></icon>
        <div class="trg-12">Send</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Emoji"></icon>
        <div class="trg-12">Emoji</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="EmojiFill"></icon>
        <div class="trg-12">EmojiFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Mobile"></icon>
        <div class="trg-12">Mobile</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Copy"></icon>
        <div class="trg-12">Copy</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Comment"></icon>
        <div class="trg-12">Comment</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Notice"></icon>
        <div class="trg-12">Notice</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Member"></icon>
        <div class="trg-12">Member</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Event"></icon>
        <div class="trg-12">Event</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="BizKakao"></icon>
        <div class="trg-12">BizKakao</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Question"></icon>
        <div class="trg-12">Question</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="QuestionMarkFill"></icon>
        <div class="trg-12">QuestionMarkFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="QuestionMark"></icon>
        <div class="trg-12">QuestionMark</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="WarningFill"></icon>
        <div class="trg-12">WarningFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Warning"></icon>
        <div class="trg-12">Warning</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Time"></icon>
        <div class="trg-12">Time</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="View"></icon>
        <div class="trg-12">View</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Premium"></icon>
        <div class="trg-12">Premium</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="PlusCircleFill"></icon>
        <div class="trg-12">PlusCircleFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="XmarkCircleFill"></icon>
        <div class="trg-12">XmarkCircleFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Thumb"></icon>
        <div class="trg-12">Thumb</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Exit"></icon>
        <div class="trg-12">Exit</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="LicenseFill"></icon>
        <div class="trg-12">LicenseFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Spinner"></icon>
        <div class="trg-12">Spinner</div>
      </div>
    </div>

    <h2 class="tbd-16">04_Location</h2>
    <div
      class="grid grid-cols-6 gap-y-[20px] place-items-center mb-[40px] py-[20px] px-[20px]"
    >
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Gps"></icon>
        <div class="trg-12">Gps</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="MapFill"></icon>
        <div class="trg-12">MapFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Map"></icon>
        <div class="trg-12">Map</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Metro"></icon>
        <div class="trg-12">Metro</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="MetroFill"></icon>
        <div class="trg-12">MetroFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="RoadView"></icon>
        <div class="trg-12">RoadView</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Location"></icon>
        <div class="trg-12">Location</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="LocationFill"></icon>
        <div class="trg-12">LocationFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="LocationUnderline"></icon>
        <div class="trg-12">LocationUnderline</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="University"></icon>
        <div class="trg-12">University</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="UniversityFill"></icon>
        <div class="trg-12">UniversityFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="RoomNumber"></icon>
        <div class="trg-12">RoomNumber</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Apt"></icon>
        <div class="trg-12">Apt</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Officetels"></icon>
        <div class="trg-12">Officetels</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="AgentFill"></icon>
        <div class="trg-12">AgentFill</div>
      </div>
    </div>

    <h2 class="tbd-16">05_Room Option</h2>
    <div
      class="grid grid-cols-6 gap-y-[20px] place-items-center mb-[40px] py-[20px] px-[20px]"
    >
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Road"></icon>
        <div class="trg-12">Road</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Toilet"></icon>
        <div class="trg-12">Toilet</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Elevator"></icon>
        <div class="trg-12">Elevator</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="NewBuild"></icon>
        <div class="trg-12">NewBuild</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Bank"></icon>
        <div class="trg-12">Bank</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="FullOption"></icon>
        <div class="trg-12">FullOption</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Parking"></icon>
        <div class="trg-12">Parking</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Pet"></icon>
        <div class="trg-12">Pet</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Study"></icon>
        <div class="trg-12">Study</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="DeliveryFood"></icon>
        <div class="trg-12">DeliveryFood</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Parcel"></icon>
        <div class="trg-12">Parcel</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="BuildType"></icon>
        <div class="trg-12">BuildType</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Floor"></icon>
        <div class="trg-12">Floor</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="RoomCount"></icon>
        <div class="trg-12">RoomCount</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="RoomSize"></icon>
        <div class="trg-12">RoomSize</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Vacancy"></icon>
        <div class="trg-12">Vacancy</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Fee"></icon>
        <div class="trg-12">Fee</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Shower"></icon>
        <div class="trg-12">Shower</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="WindowInside"></icon>
        <div class="trg-12">WindowInside</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="WindowOutside"></icon>
        <div class="trg-12">WindowOutside</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="AirConditionerairConditioner"></icon>
        <div class="trg-12">AirConditionerairConditioner</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Heating"></icon>
        <div class="trg-12">Heating</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Internet"></icon>
        <div class="trg-12">Internet</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Option"></icon>
        <div class="trg-12">Option</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Meal"></icon>
        <div class="trg-12">Meal</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="PersonalFacility"></icon>
        <div class="trg-12">PersonalFacility</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Safety"></icon>
        <div class="trg-12">Safety</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Amenity"></icon>
        <div class="trg-12">Amenity</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Terrace"></icon>
        <div class="trg-12">Terrace</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="CommonFacility"></icon>
        <div class="trg-12">CommonFacility</div>
      </div>
    </div>

    <h2 class="tbd-16">06_Room Type</h2>
    <div
      class="grid grid-cols-6 gap-y-[20px] place-items-center mb-[40px] py-[20px] px-[20px]"
    >
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Villa"></icon>
        <div class="trg-12">Villa</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Flat"></icon>
        <div class="trg-12">Flat</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Apartment"></icon>
        <div class="trg-12">Apartment</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Office"></icon>
        <div class="trg-12">Office</div>
      </div>
    </div>

    <h2 class="tbd-16">07_Social</h2>
    <div
      class="grid grid-cols-6 gap-y-[20px] place-items-center mb-[40px] py-[20px] px-[20px]"
    >
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Cafe"></icon>
        <div class="trg-12">Cafe</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="CafeFill"></icon>
        <div class="trg-12">CafeFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Blog"></icon>
        <div class="trg-12">Blog</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Facebook"></icon>
        <div class="trg-12">Facebook</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="FacebookFill"></icon>
        <div class="trg-12">FacebookFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Instagram"></icon>
        <div class="trg-12">Instagram</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Kakao"></icon>
        <div class="trg-12">Kakao</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Naver"></icon>
        <div class="trg-12">Naver</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <icon name="Apple"></icon>
        <div class="trg-12">Apple</div>
      </div>
    </div>
  </div>
`

const meta = {
  title: 'Foundations/Iconography',
  tags: ['autodocs'],
  render: Template,
} satisfies Meta
export default meta

type Story = StoryObj

export const Default: Story = {}
