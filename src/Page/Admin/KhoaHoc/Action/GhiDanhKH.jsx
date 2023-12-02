import React from 'react'
import HocVienChuaGhiDanh from './GhiDanh/HocVienChuaGhiDanh'
import HocVienChoXetDuyet from './GhiDanh/HocVienChoXetDuyet'
import HocVienDaGhiDanh from './GhiDanh/HocVienDaGhiDanh'

export default function GhiDanhKH() {
  return (
    <div>
        <HocVienChuaGhiDanh/>
        <HocVienChoXetDuyet/>
        <HocVienDaGhiDanh/>
    </div>
  )
}
