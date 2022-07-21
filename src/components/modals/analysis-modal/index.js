import React from "react";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
    DialogActions,
} from "@mui/material";

// import { StateContext, DispatchContext } from '../../../store';
import { Text, Button } from "../..";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1),
    },
}));

const ModalContent = styled(DialogContent)(({ theme }) => ({
    width: 500,
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.down("sm")]: {
        width: 300,
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle
            {...other}
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

export default function AnalysisModal({ open, handleClose }) {
    const data = [
        {
            label: "Общий анализ крови",
            span: "(14 дней)",
        },
        {
            label: "Биохимический анализ крови (общий белок, мочевина, креатинин, билирубин (общий), АЛТ, АСТ, глюкоза, калий, натрий)",
            span: "(14 дней)",
        },
        {
            label: "Коагулограмма (МНО, тромбиновое время, протромбиновое время, АЧТВ, фибриноген, плазминоген, антитромбин Ш, протромбиновый индекс, Д-димеры)",
            span: "(14 дней)",
        },
        {
            label: "Анализ крови на RW, ВИЧ",
            span: "(14 дней)",
        },
        {
            label: "Нbs-антиген + анти HCV",
            span: "(14 дней)",
        },
        {
            label: "Группа крови, резус-фактор",
            span: "",
        },
        {
            label: "Общий анализ мочи",
            span: "(14 дней)",
        },
        {
            label: "ПЦР мазок на Covid-19",
            span: "(3-5 дней)",
        },
        {
            label: "ЭКГ с расшифровкой (если есть отклонения, нужно заключение кардиолога)",
            span: "(14 дней)",
        },
        {
            label: "КТ легких",
            span: "(14 дней)",
        },
        {
            label: "УЗДГ вен нижних конечностей (если есть отклонения, нужно заключение флеболога)",
            span: "(1 месяц)",
        },
        {
            label: "КТ пазух носа в 2х или Зх проекциях (диск и снимок)",
            span: "(1 месяц)",
        },
        {
            label: "УЗИ молочных желез",
            span: "(1 месяц)",
        },
        {
            label: "УЗИ брюшной полости",
            span: "(1 месяц)",
        },
        {
            label: "Заключение терапевта о допуске к операции",
            span: "",
        },
    ];

    return (
        <div>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle
                    id="customized-dialog-title"
                    onClose={handleClose}
                >
                    Список анализов
                </BootstrapDialogTitle>
                <ModalContent dividers>
                    {data.map((item, index) => (
                        <Text key={index} sx={{ mt: index == 0 ? 0 : 1 }}>
                            {index + 1}. {item.label}
                            <span style={{ fontWeight: 600, marginLeft: 5 }}>
                                {item.span}
                            </span>
                        </Text>
                    ))}
                    <Text sx={{ fontWeight: 600, fontSize: 18, mt: 2 }}>
                        При себе иметь все оригиналы анализов с синей печатью
                        медицинского учреждения.
                    </Text>
                </ModalContent>
            </BootstrapDialog>
        </div>
    );
}
