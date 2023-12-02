import React from 'react'
import {useSelector} from 'react-redux';
import KhoaHocChuaGhiDanh from './GhiDanh/KhoaHocChuaGhiDanh';
import KhoaHocDaGhiDanh from './GhiDanh/KhoaHocDaGhiDanh';
import KhoaHocChoXetDuyet from './GhiDanh/KhoaHocChoXetDuyet';

export default function GhiDanhHV() {
  return (
    <div>
        <KhoaHocChuaGhiDanh/>
        <KhoaHocChoXetDuyet/>
        <KhoaHocDaGhiDanh/>
    </div>
  )
}
