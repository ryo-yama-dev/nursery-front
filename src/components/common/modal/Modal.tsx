"use client"

import Comp, { ModalProps as Props } from "@mui/material/Modal"

export interface ModalProps extends Props {}

export const Modal = (props: ModalProps) => <Comp {...props} />
