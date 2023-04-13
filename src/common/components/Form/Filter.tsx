import { useStationsContext } from "@/common/contexts/Stations";

export default function Filter() {
  const { quality, groupId, setQuality, setGroupId } = useStationsContext();

  function handleSelectQuality(e: React.ChangeEvent<HTMLSelectElement>) {
    setQuality(e.target.value);
  }

  function handleSelectGroup(e: React.ChangeEvent<HTMLSelectElement>) {
    setGroupId(e.target.value);
  }

  return (
    <form className="mt-5">
      <label className="mb-2 mt-2 block text-sm font-medium text-gray-900">
        คุณภาพฝุ่น
      </label>
      <select
        onChange={handleSelectQuality}
        value={quality}
        defaultValue={quality}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="ทั้งหมด">ทั้งหมด</option>
        <option value="คุณภาพดีมาก">คุณภาพดีมาก</option>
        <option value="คุณภาพดี">คุณภาพดี</option>
        <option value="ปานกลาง">ปานกลาง</option>
        <option value="เริ่มมีผลกระทบต่อสุขภาพ">เริ่มมีผลกระทบต่อสุขภาพ</option>
        <option value="มีผลกระทบต่อสุขภาพ">มีผลกระทบต่อสุขภาพ</option>
      </select>
      <label className="mb-2 mt-2 block text-sm font-medium text-gray-900">
        เลือกกลุ่มเขต
      </label>
      <select
        onChange={handleSelectGroup}
        value={groupId}
        defaultValue={groupId}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="0">All District</option>
        <option value="1">กลุ่มกรุงเทพกลาง</option>
        <option value="2">กลุ่มกรุงเทพใต้</option>
        <option value="3">กลุ่มกรุงเทพเหนือ</option>
        <option value="4">กลุ่มกรุงเทพตะวันออก</option>
        <option value="5">กลุ่มกรุงธนเหนือ</option>
        <option value="6">กลุ่มกรุงธนใต้</option>
        <option value="7">กลุ่มรถตรวจวัดคุณภาพอากาศ</option>
        <option value="8">เครื่องตรวจวัด PM2.5 แบบเคลื่อนที่</option>
      </select>
    </form>
  );
}
