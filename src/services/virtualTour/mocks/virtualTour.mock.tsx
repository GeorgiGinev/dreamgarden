import { VirtualTourApiResponseInterface } from "@/interfaces/api/video-tour-api-response.interface";

export function createVirtualTourMock(params: Partial<VirtualTourApiResponseInterface> | null = null): VirtualTourApiResponseInterface {
    return ({
        description: 'Отправете се на дигитална разходка из всяко кътче на Приказната градина – масивната, дървена шатра, която оживява в луксозен ресторант, поляната на любовта, идеална за открит ритуал, зоната за отдих и сладки приказки, безброй неповторими кътове за снимки и още.',
        video: '/videos/virtual-tour/virtual-tour.mp4',
        embedding_link: 'https://www.asteroom.com/pviewer?hideleadgen=1&token=c_TcCJ_MxEGF-c__thZUJw',
    })
}