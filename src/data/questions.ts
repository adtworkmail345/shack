import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: "Gimana nih, kabar tambak udangmu? Semuanya lancar, kan?",
    answers: [
      {
        text: "Dibandingkan tambak lain, sih masih aman-aman aja, ya!",
        scores: { existing: 2 }
      },
      {
        text: "Agak khawatir sama penyebaran penyakit dan perubahan suhu yang bisa pengaruh juga, sih.",
        scores: { fanatic: 2, shrimp: 1 }
      },
      {
        text: "Aku rawat dengan cara yang biasa, hasil panen, ya, serahkan ke Tuhan!",
        scores: { ordinary: 2 }
      },
      {
        text: "Dari laporan dan hitungan bisnis, semua masih sesuai plan, kok!",
        scores: { trader: 2, 'hi-tech': 1 }
      }
    ]
  },
  {
    id: 2,
    text: "Kira-kira kamu udah kasih yang terbaik belum buat si udang-udang di tambakmu?",
    answers: [
      {
        text: "Aku udah planning operasional dan teknologi terbaik buat tambakku, jadi semuanya terukur.",
        scores: { trader: 2, 'hi-tech': 1 }
      },
      {
        text: "Kalau ngikutin pola dari waktu panen sebelumnya, sih, harusnya aman.",
        scores: { ordinary: 2 }
      },
      {
        text: "Berdasarkan obrolan di komunitas, ini yang terbaik buat kondisi udang dan tambak di area sini.",
        scores: { existing: 2 }
      },
      {
        text: "Support dari kimia, fisika, dan perlakuan udah sesuai rekomendasi ahli.",
        scores: { fanatic: 2, shrimp: 1 }
      }
    ]
  },
  {
    id: 3,
    text: "Apa sih yang bikin kamu semangat beternak udang? Ada cerita khusus?",
    answers: [
      {
        text: "Aku udah planning operasional dan teknologi terbaik buat tambakku, jadi semuanya terukur.",
        scores: { trader: 2, 'hi-tech': 1 }
      },
      {
        text: "Ini bisnis keluarga, jadi aku lanjutin aja.",
        scores: { ordinary: 2, shrimp: 1 }
      },
      {
        text: "Aku ingin jadi ahli budidaya, yang nggak cuma teori tapi juga praktek langsung di lapangan.",
        scores: { fanatic: 2, 'hi-tech': 1 }
      },
      {
        text: "Ikut-ikutan teman dan tetangga, soalnya tinggal di daerah pesisir juga!",
        scores: { existing: 2, shrimp: 1 }
      }
    ]
  },
  {
    id: 4,
    text: "Kamu gabung di komunitas petambak juga nggak? Seru kayaknya kalau ada tempat sharing bareng sesama petambak!",
    answers: [
      {
        text: "Wah, kebetulan banget, aku malah pengurus komunitasnya!",
        scores: { existing: 2 }
      },
      {
        text: "Iya, dong! Biar bisa share harga dan update kondisi pasar nasional.",
        scores: { trader: 2, fanatic: 1 }
      },
      {
        text: "Nggak, aku cuma nerusin bisnis keluarga aja.",
        scores: { ordinary: 2, shrimp: 1 }
      },
      {
        text: "Ikutan online aja, soalnya udah pakai teknologi buat pengawasan, jadi nggak harus sering mampir.",
        scores: { 'hi-tech': 2, fanatic: 1 }
      }
    ]
  },
  {
    id: 5,
    text: "Ada teknologi atau fasilitas keren yang kamu pasang di tambak? Bagi dong ceritanya!",
    answers: [
      {
        text: "Komplit! Semua teknologi terbaru dan terbaik udah aku pasang di tambak.",
        scores: { 'hi-tech': 2, trader: 1 }
      },
      {
        text: "Yang basic-basic aja, pakai cara turun-temurun, masih aman kok.",
        scores: { ordinary: 2, shrimp: 1 }
      },
      {
        text: "Aku hanya pakai rekomendasi dari ahli yang terpercaya, biar efektif dan efisien.",
        scores: { fanatic: 2 }
      },
      {
        text: "Kalau bisa beli bareng-bareng biar dapet diskon, ya langsung gas aja!",
        scores: { existing: 2, trader: 1 }
      }
    ]
  },
  {
    id: 6,
    text: "Seberapa besar sih peran bisnis udang ini dalam hidupmu? Penting banget atau gimana?",
    answers: [
      {
        text: "Udang udah jadi nafas hidup keluarga kami.",
        scores: { shrimp: 2, fanatic: 1 }
      },
      {
        text: "Aku juga punya bisnis lain di komoditas yang cuannya besar.",
        scores: { trader: 2 }
      },
      {
        text: "Sejauh ini masih fokus ke udang dulu, karena lebih paham soal komoditas ini.",
        scores: { fanatic: 2, ordinary: 1 }
      },
      {
        text: "Sekarang sih komunitas lagi di udang, kalau nanti ada tren lain yang bagus, mungkin bakal coba juga.",
        scores: { 'hi-tech': 2, existing: 1, ordinary: 1 }
      }
    ]
  },
  {
    id: 7,
    text: "Kalau panennya melimpah, biasanya udang-udangnya kamu apakan? Ada rencana khusus?",
    answers: [
      {
        text: "Kalau ada lebih, biasanya dimakan bareng sama tim dan tetangga!",
        scores: { ordinary: 1, fanatic: 1, 'hi-tech': 1 }
      },
      {
        text: "Aku jual lagi ke penduduk sekitar.",
        scores: { trader: 2, fanatic: 1, 'hi-tech': 1 }
      },
      {
        text: "Kadang dikubur aja.",
        scores: { shrimp: 3 }
      },
      {
        text: "Kalau nggak ada pilihan, ya terpaksa dibuang ke sungai atau laut.",
        scores: { ordinary: 2 }
      }
    ]
  }
];