const channels = {
    a2z: {
        number: 1,
        name: "A2Z",
        url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_a2z.mpd",
        drmConfig: {
            clearKeys: {
                'f703e4c8ec9041eeb5028ab4248fa094': 'c22f2162e176eee6273a5d0b68d19530'
            }
        }
    },
    gmapinoy: {
        number: 2,
        name: "GMA Pinoy TV",
        url: "https://amg01006-abs-cbn-abscbn-gma-x7-dash-abscbnono-dzsx9.amagi.tv/index.mpd",
        drmConfig: {
            clearKeys: {
                'c95ed4c44b0b4f7fa1c6ebbbbaab21a1': '47635b8e885e19f2ccbdff078c207058'
            }
        }
    },
    tv5: {
        number: 3,
        name: "TV5",
        url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_hd.mpd",
        drmConfig: {
            clearKeys: {
                '2615129ef2c846a9bbd43a641c7303ef': '07c7f996b1734ea288641a68e1cfdc4d'
            }
        }
    },
    ptv4: {
        number: 4,
        name: "PTV 4",
        url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_ptv4_sd.mpd",
        drmConfig: {
            clearKeys: {
                '71a130a851b9484bb47141c8966fb4a3': 'ad1f003b4f0b31b75ea4593844435600'
            }
        }
    },
    ibc13: {
        number: 5,
        name: "IBC 13",
        url: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/ibc13_sd.mpd",
        drmConfig: {
            clearKeys: {
                '04e292bc99bd4ccba89e778651914254': 'ff0a62bdf8920ce453fe680330b563a5'
            }
        }
    },
    rptv: {
        number: 6,
        name: "RPTV",
        url: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cnn_rptv_prod_hd.mpd",
        drmConfig: {
            clearKeys: {
                '1917f4caf2364e6d9b1507326a85ead6': 'a1340a251a5aa63a9b0ea5d9d7f67595'
            }
        }
    },
    aljazeera: {
        number: 7,
        name: "Al Jazeera",
        url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_aljazeera.mpd",
        drmConfig: {
            clearKeys: {
                '7f3d900a04d84492b31fe9f79ac614e3': 'd33ff14f50beac42969385583294b8f2'
            }
        }
    },
    bbcnews: {
        number: 7,
        name: "BBC News",
        url: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/bbcworld_news_sd.mpd",
        drmConfig: {
            clearKeys: {
                'f59650be475e4c34a844d4e2062f71f3': '119639e849ddee96c4cec2f2b6b09b40'
            }
        }
    },
    cna: {
        number: 9,
        name: "CNA",
        url: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_channelnewsasia.mpd",
        drmConfig: {
            clearKeys: {
                'b259df9987364dd3b778aa5d42cb9acd': '753e3dba96ab467e468269e7e33fb813'
            }
        }
    },
    cnn: {
        number: 10,
        name: "CNN",
        url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cnnhd.mpd",
        drmConfig: {
            clearKeys: {
                '900c43f0e02742dd854148b7a75abbec': 'da315cca7f2902b4de23199718ed7e90'
            }
        }
    },
    onenews: {
        number: 11,
        name: "One News",
        url: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/onenews_hd1.mpd",
        drmConfig: {
            clearKeys: {
                'd39eb201ae494a0b98583df4d110e8dd': '6797066880d344422abd3f5eda41f45f'
            }
        }
    },
    oneph: {
        number: 12,
        name: "One PH",
        url: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/oneph_sd.mpd",
        drmConfig: {
            clearKeys: {
                '92834ab4a7e1499b90886c5d49220e46': 'a7108d9a6cfcc1b7939eb111daf09ab3'
            }
        }
    },
    truefmtv: {
        number: 13,
        name: "True FM TV",
        url: "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/truefm_tv.mpd",
        drmConfig: {
            clearKeys: {
                '0559c95496d44fadb94105b9176c3579': '40d8bb2a46ffd03540e0c6210ece57ce'
            }
        }
    },
    bilyonaryonewschannel: {
        number: 14,
        name: "Bilyonaryo News Channel",
        url: "https://qp-pldt-live-grp-05-prod.akamaized.net/out/u/bilyonaryoch.mpd",
        drmConfig: {
            clearKeys: {
                '227ffaf09bec4a889e0e0988704d52a2': 'b2d0dce5c486891997c1c92ddaca2cd2'
            }
        }
    },
    bloomberg: {
        number: 15,
        name: "Bloomberg",
        url: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/bloomberg_sd.mpd",
        drmConfig: {
            clearKeys: {
                'ef7d9dcfb99b406cb79fb9f675cba426': 'b24094f6ca136af25600e44df5987af4'
            }
        }
    },
    cctv4: {
        number: 16,
        name: "CCTV 4",
        url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cctv4.mpd",
        drmConfig: {
            clearKeys: {
                'b83566836c0d4216b7107bd7b8399366': '32d50635bfd05fbf8189a0e3f6c8db09'
            }
        }
    },
    mptv: {
        number: 17,
        name: "MPTV",
        url: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_mptv.mpd",
        drmConfig: {
            clearKeys: {
                '6aab8f40536f4ea98e7c97b8f3aa7d4e': '139aa5a55ade471faaddacc4f4de8807'
            }
        }
    },
    nbatvphilippines: {
        number: 18,
        name: "NBA TV Philippines",
        url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cgnl_nba.mpd",
        drmConfig: {
            clearKeys: {
                'c5e51f41ceac48709d0bdcd9c13a4d88': '20b91609967e472c27040716ef6a8b9a'
            }
        }
    },
    onesportsplus: {
        number: 19,
        name: "One Sports+",
        url: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_onesportsplus_hd1.mpd",
        drmConfig: {
            clearKeys: {
                '322d06e9326f4753a7ec0908030c13d8': '1e3e0ca32d421fbfec86feced0efefda'
            }
        }
    },
    onesports: {
        number: 20,
        name: "One Sports",
        url: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_onesports_hd.mpd",
        drmConfig: {
            clearKeys: {
                '53c3bf2eba574f639aa21f2d4409ff11': '3de28411cf08a64ea935b9578f6d0edd'
            }
        }
    },
    pbarush: {
        number: 21,
        name: "PBA Rush",
        url: "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_pbarush_hd1.mpd",
        drmConfig: {
            clearKeys: {
                '76dc29dd87a244aeab9e8b7c5da1e5f3': '95b2f2ffd4e14073620506213b62ac82'
            }
        }
    },
    tapsports: {
        number: 22,
        name: "TAP Sports",
        url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tapsports.mpd",
        drmConfig: {
            clearKeys: {
                'eabd2d95c89e42f2b0b0b40ce4179ea0': '0e7e35a07e2c12822316c0dc4873903f'
            }
        }
    },
    uaapvarsitychannel: {
        number: 23,
        name: "Uaap Varsity Channel",
        url: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/cg_uaap_cplay_sd.mpd",
        drmConfig: {
            clearKeys: {
                '95588338ee37423e99358a6d431324b9': '6e0f50a12f36599a55073868f814e81e'
            }
        }
    },
    premiersports2: {
        number: 24,
        name: "Premier Sports 2",
        url: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_premiertennishd.mpd",
        drmConfig: {
            clearKeys: {
                '59454adb530b4e0784eae62735f9d850': '61100d0b8c4dd13e4eb8b4851ba192cc'
            }
        }
    },
    premiersports: {
        number: 25,
        name: "Premier Sports",
        url: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_premiersports_hd1.mpd",
        drmConfig: {
            clearKeys: {
                'fc19c98cb9504a0fb78b22fea0a4b814': 'ea683112a96d4ae6c32d4ea13923e8c7'
            }
        }
    },
    spotv: {
        number: 26,
        name: "SPOTV",
        url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_spotvhd.mpd",
        drmConfig: {
            clearKeys: {
                'ec7ee27d83764e4b845c48cca31c8eef': '9c0e4191203fccb0fde34ee29999129e'
            }
        }
    },
    spotv2: {
        number: 27,
        name: "SPOTV 2",
        url: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_spotv2hd.mpd",
        drmConfig: {
            clearKeys: {
                '7eea72d6075245a99ee3255603d58853': '6848ef60575579bf4d415db1032153ed'
            }
        }
    },
    cinemaone: {
        number: 28,
        name: "Cinema One",
        url: "https://d9rpesrrg1bdi.cloudfront.net/out/v1/93b9db7b231d45f28f64f29b86dc6c65/index.mpd",
        drmConfig: {
            clearKeys: {
                '58d0e56991194043b8fb82feb4db7276': 'd68f41b59649676788889e19fb10d22c'
            }
        }
    },
    cinemo: {
        number: 29,
        name: "Cinemo",
        url: "https://d1bail49udbz1k.cloudfront.net/out/v1/3a895f368f4a467c9bca0962559efc19/index.mpd",
        drmConfig: {
            clearKeys: {
                'aa8aebe35ccc4541b7ce6292efcb1bfb': 'aab1df109d22fc5d7e3ec121ddf24e5f'
            }
        }
    },
    hbo: {
        number: 30,
        name: "HBO",
        url: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbohd.mpd",
        drmConfig: {
            clearKeys: {
                'd47ebabf7a21430b83a8c4b82d9ef6b1': '54c213b2b5f885f1e0290ee4131d425b'
            }
        }
    },
    hbosignature: {
        number: 31,
        name: "HBO Signature",
        url: "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_hbosign.mpd",
        drmConfig: {
            clearKeys: {
                'a06ca6c275744151895762e0346380f5': '559da1b63eec77b5a942018f14d3f56f'
            }
        }
    },
    hbohits: {
        number: 32,
        name: "HBO Hits",
        url: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hbohits.mpd",
        drmConfig: {
            clearKeys: {
                'b04ae8017b5b4601a5a0c9060f6d5b7d': 'a8795f3bdb8a4778b7e888ee484cc7a1'
            }
        }
    },
    hbofamily: {
        number: 33,
        name: "HBO Family",
        url: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbofam.mpd",
        drmConfig: {
            clearKeys: {
                '872910c843294319800d85f9a0940607': 'f79fd895b79c590708cf5e8b5c6263be'
            }
        }
    },
    cinemax: {
        number: 34,
        name: "Cinemax",
        url: "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_cinemax.mpd",
        drmConfig: {
            clearKeys: {
                'b207c44332844523a3a3b0469e5652d7': 'fe71aea346db08f8c6fbf0592209f955'
            }
        }
    },
    hitsmovies: {
        number: 35,
        name: "HITS Movies",
        url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_hitsmovies.mpd",
        drmConfig: {
            clearKeys: {
                'f56b57b32d7e4b2cb21748c0b56761a7': '3df06a89aa01b32655a77d93e09e266f'
            }
        }
    },
    pinoyboxoffice: {
        number: 36,
        name: "Pinoy Box Office",
        url: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/pbo_sd.mpd",
        drmConfig: {
            clearKeys: {
                'dcbdaaa6662d4188bdf97f9f0ca5e830': '31e752b441bd2972f2b98a4b1bc1c7a1'
            }
        }
    },
    rockextreme: {
        number: 37,
        name: "Rock Action",
        url: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_rockextreme.mpd",
        drmConfig: {
            clearKeys: {
                '0f852fb8412b11edb8780242ac120002': '4cbc004d8c444f9f996db42059ce8178'
            }
        }
    },
    tagalizedmoviechannel: {
        number: 38,
        name: "Tagalized Movie Channel",
        url: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tagalogmovie.mpd",
        drmConfig: {
            clearKeys: {
                '96701d297d1241e492d41c397631d857': 'ca2931211c1a261f082a3a2c4fd9f91b'
            }
        }
    },
    tapmovies: {
        number: 39,
        name: "TAP Movies",
        url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapmovies_hd1.mpd",
        drmConfig: {
            clearKeys: {
                '71cbdf02b595468bb77398222e1ade09': 'c3f2aa420b8908ab8761571c01899460'
            }
        }
    },
    thrill: {
        number: 40,
        name: "Thrill",
        url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_thrill_sd.mpd",
        drmConfig: {
            clearKeys: {
                '928114ffb2394d14b5585258f70ed183': 'a82edc340bc73447bac16cdfed0a4c62'
            }
        }
    },
    tvnmoviespinoy: {
        number: 41,
        name: "tvN Movies Pinoy",
        url: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tvnmovie.mpd",
        drmConfig: {
            clearKeys: {
                '2e53f8d8a5e94bca8f9a1e16ce67df33': '3471b2464b5c7b033a03bb8307d9fa35'
            }
        }
    },
    tapactionflix: {
        number: 42,
        name: "Tap Action Flix",
        url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapactionflix_hd1.mpd",
        drmConfig: {
            clearKeys: {
                'bee1066160c0424696d9bf99ca0645e3': 'f5b72bf3b89b9848de5616f37de040b7'
            }
        }
    },
    animax: {
        number: 43,
        name: "Animax",
        url: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_animax_sd.mpd",
        drmConfig: {
            clearKeys: {
                '92032b0e41a543fb9830751273b8debd': '03f8b65e2af785b10d6634735dbe6c11'
            }
        }
    },
    cartoonnetwork: {
        number: 44,
        name: "Cartoon Network",
        url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cartoonnetworkhd.mpd",
        drmConfig: {
            clearKeys: {
                'a2d1f552ff9541558b3296b5a932136b': 'cdd48fa884dc0c3a3f85aeebca13d444'
            }
        }
    },
    dreamworkseng: {
        number: 45,
        name: "DreamWorks (English)",
        url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_dreamworks_hd1.mpd",
        drmConfig: {
            clearKeys: {
                '4ab9645a2a0a47edbd65e8479c2b9669': '8cb209f1828431ce9b50b593d1f44079'
            }
        }
    },
    dreamworkstag: {
        number: 46,
        name: "DreamWorks (Tagalized)",
        url: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_dreamworktag.mpd",
        drmConfig: {
            clearKeys: {
                '564b3b1c781043c19242c66e348699c5': 'd3ad27d7fe1f14fb1a2cd5688549fbab'
            }
        }
    },
    moonbugkids: {
        number: 47,
        name: "Moonbug Kids",
        url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_moonbug_kids_sd.mpd",
        drmConfig: {
            clearKeys: {
                '0bf00921bec94a65a124fba1ef52b1cd': '0f1488487cbe05e2badc3db53ae0f29f'
            }
        }
    },
    nickjr: {
        number: 48,
        name: "Nick Jr",
        url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/9982/default_ott.mpd",
        drmConfig: {
            clearKeys: {
                'a098896d2b11c5f3906a993c3ba5c610': 'f3f842c54cc96cbbd0bcb96a4cb8a813'
            }
        }
    },
    nickelodeon: {
        number: 49,
        name: "Nickelodeon",
        url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2511/default_ott.mpd",
        drmConfig: {
            clearKeys: {
                'd8520e96a1283ab6e5be538474bfa810': 'bda5f7bbc1e44096f779a0619fe9881f'
            }
        }
    },
    warnertv: {
        number: 50,
        name: "Warner TV",
        url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_warnertvhd.mpd",
        drmConfig: {
            clearKeys: {
                '4503cf86bca3494ab95a77ed913619a0': 'afc9c8f627fb3fb255dee8e3b0fe1d71'
            }
        }
    },
    tvnpremium: {
        number: 51,
        name: "tvN Premium",
        url: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_tvnpre.mpd",
        drmConfig: {
            clearKeys: {
                'e1bde543e8a140b38d3f84ace746553e': 'b712c4ec307300043333a6899a402c10'
            }
        }
    },
    axn: {
        number: 52,
        name: "Axn",
        url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_axn_sd.mpd",
        drmConfig: {
            clearKeys: {
                'fd5d928f5d974ca4983f6e9295dfe410': '3aaa001ddc142fedbb9d5557be43792f'
            }
        }
    },
    hits: {
        number: 53,
        name: "HITS",
        url: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/hits_hd1.mpd",
        drmConfig: {
            clearKeys: {
                'dac605bc197e442c93f4f08595a95100': '975e27ffc1b7949721ee3ccb4b7fd3e5'
            }
        }
    },
    buko: {
        number: 54,
        name: "Buko",
        url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_buko_sd.mpd",
        drmConfig: {
            clearKeys: {
                 'd273c085f2ab4a248e7bfc375229007d': '7932354c3a84f7fc1b80efa6bcea0615'
            }
        }
    },
    sarisari: {
        number: 55,
        name: "Sari-Sari",
        url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_sari_sari_sd.mpd",
        drmConfig: {
            clearKeys: {
                '0a7ab3612f434335aa6e895016d8cd2d': 'b21654621230ae21714a5cab52daeb9d'
            }
        }
    },
    crimeinvestigation: {
        number: 56,
        name: "Crime & Investigation",
        url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_crime_invest.mpd",
        drmConfig: {
            clearKeys: {
                '21e2843b561c4248b8ea487986a16d33': 'db6bb638ccdfc1ad1a3e98d728486801'
            }
        }
    },
    hitsnow: {
        number: 57,
        name: "HITS Now",
        url: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hitsnow.mpd",
        drmConfig: {
            clearKeys: {
                '14439a1b7afc4527bb0ebc51cf11cbc1': '92b0287c7042f271b266cc11ab7541f1'
            }
        }
    },
    kapamilyachannel: {
        number: 58,
        name: "Kapamilya Channel",
        url: "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-kapcha-dash-abscbnono/cae7785c-8bd3-45ff-9681-3b6dcddbc5d8/index.mpd",
        drmConfig: {
            clearKeys: {
                'bd17afb5dc9648a39be79ee3634dd4b8': '3ecf305d54a7729299b93a3d69c02ea5'
            }
        }
    },
    lifetime: {
        number: 59,
        name: "Lifetime",
        url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_lifetime.mpd",
        drmConfig: {
            clearKeys: {
                'cf861d26e7834166807c324d57df5119': '64a81e30f6e5b7547e3516bbf8c647d0'
            }
        }
    },
    lotusmacau: {
        number: 60,
        name: "Lotus Macau",
        url: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/lotusmacau_prd.mpd",
        drmConfig: {
            clearKeys: {
                '60dc692e64ea443a8fb5ac186c865a9b': '01bdbe22d59b2a4504b53adc2f606cc1'
            }
        }
    },
    rockentertainment: {
        number: 61,
        name: "Rock Entertainment",
        url: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_rockentertainment.mpd",
        drmConfig: {
            clearKeys: {
                'e4ee0cf8ca9746f99af402ca6eed8dc7': 'be2a096403346bc1d0bb0f812822bb62'
            }
        }
    },
    taptv: {
        number: 62,
        name: "Tap TV",
        url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_taptv_sd.mpd",
        drmConfig: {
            clearKeys: {
                'f6804251e90b4966889b7df94fdc621e': '55c3c014f2bd12d6bd62349658f24566'
            }
        }
    },
    techstorm: {
        number: 63,
        name: "Techstorm",
        url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tech_storm.mpd",
        drmConfig: {
            clearKeys: {
                '5675d85ce6754ba6aa8f6acc4660f76f': '140bfb365cf143c349f68699238a610c'
            }
        }
    },
    kix: {
        number: 64,
        name: "Kix",
        url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/kix_hd1.mpd",
        drmConfig: {
            clearKeys: {
                'a8d5712967cd495ca80fdc425bc61d6b': 'f248c29525ed4c40cc39baeee9634735'
            }
        }
    },
    vivacinema: {
        number: 65,
        name: "Viva Cinema",
        url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/viva_sd.mpd",
        drmConfig: {
            clearKeys: {
                '07aa813bf2c147748046edd930f7736e': '3bd6688b8b44e96201e753224adfc8fb'
            }
        }
    },
    hgtv: {
        number: 66,
        name: "HGTV",
        url: "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/hgtv_hd1.mpd",
        drmConfig: {
            clearKeys: {
                'f0e3ab943318471abc8b47027f384f5a': '13802a79b19cc3485d2257165a7ef62a'
            }
        }
    },
    foodnetwork: {
        number: 67,
        name: "Food Network",
        url: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_foodnetwork_hd1.mpd",
        drmConfig: {
            clearKeys: {
                'b7299ea0af8945479cd2f287ee7d530e': 'b8ae7679cf18e7261303313b18ba7a14'
            }
        }
    },
    foodnetworkasia: {
        number: 68,
        name: "Food Network Asia",
        url: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/asianfoodnetwork_sd.mpd",
        drmConfig: {
            clearKeys: {
                '1619db30b9ed42019abb760a0a3b5e7f': '5921e47fb290ae263291b851c0b4b6e4'
            }
        }
    },
    fashiontv: {
        number: 69,
        name: "Fashion TV",
        url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_fashiontvhd.mpd",
        drmConfig: {
            clearKeys: {
                '971ebbe2d887476398e97c37e0c5c591': '472aa631b1e671070a4bf198f43da0c7'
            }
        }
    },
    bbclifestyle: {
        number: 70,
        name: "BBC Lifestyle",
        url: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_bbclifestyle.mpd",
        drmConfig: {
            clearKeys: {
                '34880f56627c11ee8c990242ac120002': 'c23677c829bb244b79a3dc09ffd88ca0'
            }
        }
    },
    travelchannel: {
        number: 71,
        name: "Travel Channel",
        url: "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/travel_channel_sd.mpd",
        drmConfig: {
            clearKeys: {
                'f3047fc13d454dacb6db4207ee79d3d3': 'bdbd38748f51fc26932e96c9a2020839'
            }
        }
    }
};

let shakaPlayer = null;
let isPoweredOn = true;
let currentVolume = 1;
let channelInputTimeout = null;
let currentChannelInput = "";
let currentChannelIndex = 0;
let retryCount = 0;
const MAX_RETRIES = 3;
const RETRY_DELAY = 2000; // 2 seconds

// Initialize Shaka Player
function initApp() {
    shaka.polyfill.installAll();
    
    if (shaka.Player.isBrowserSupported()) {
        initPlayer();
    } else {
        console.error('Browser not supported!');
    }
}

function initPlayer() {
    const video = document.getElementById('video-player');
    shakaPlayer = new shaka.Player(video);

    shakaPlayer.addEventListener('error', onErrorEvent);
    
    // Configure for low latency streaming
    shakaPlayer.configure({
        streaming: {
            bufferingGoal: 10,
            rebufferingGoal: 2,
            bufferBehind: 30
        }
    });
    
    // Add fullscreen button as the only control
    video.removeAttribute('controls');
    const fullscreenButton = document.createElement('button');
    fullscreenButton.className = 'fullscreen-button';
    fullscreenButton.innerHTML = '⤢';
    fullscreenButton.onclick = toggleFullscreen;
    document.querySelector('.screen').appendChild(fullscreenButton);
}

function onErrorEvent(event) {
    // Handle both event object and direct error cases
    const error = event.detail || event;
    console.error('Error:', error);
    retryPlayback();
}

function retryPlayback() {
    if (retryCount < MAX_RETRIES) {
        retryCount++;
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = `Connection error. Retrying... (${retryCount}/${MAX_RETRIES})`;
        errorMessage.style.display = 'block';
        
        // Store retry timeout so it can be cleared if user changes channel
        if (window.retryTimeout) {
            clearTimeout(window.retryTimeout);
        }
        
        window.retryTimeout = setTimeout(() => {
            const currentChannelId = Object.keys(channels)[currentChannelIndex];
            loadChannel(currentChannelId);
        }, RETRY_DELAY);
    } else {
        handlePlaybackError();
        retryCount = 0;
    }
}

// Add new helper function to handle channel loading
function loadChannel(channelId) {
    // Clear any pending retry timeouts when loading a new channel
    if (window.retryTimeout) {
        clearTimeout(window.retryTimeout);
        window.retryTimeout = null;
    }
    
    const channel = channels[channelId];
    try {
        if (shakaPlayer) {
            shakaPlayer.unload().catch(() => {
                // Ignore unload errors, just proceed to load new content
            }).finally(() => {
                if (channel && channel.drmConfig) {
                    shakaPlayer.configure({
                        drm: {
                            clearKeys: channel.drmConfig.clearKeys
                        }
                    });
                }
                
                if (channel && channel.url) {
                    shakaPlayer.load(channel.url)
                        .then(() => {
                            const video = document.getElementById('video-player');
                            video.volume = currentVolume;
                            const playPromise = video.play();
                            if (playPromise !== undefined) {
                                playPromise.catch(error => {
                                    console.log("Autoplay prevented:", error);
                                });
                            }
                            document.getElementById('error-message').style.display = 'none';
                            retryCount = 0;
                        })
                        .catch((error) => {
                            console.error('Load error:', error);
                            onErrorEvent(error);
                        });
                } else {
                    console.error('Invalid channel or URL');
                    handlePlaybackError();
                }
            });
        }
    } catch (error) {
        console.error('Load channel error:', error);
        onErrorEvent(error);
    }
}

function handlePlaybackError() {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = 'Channel failed to load. Please try another channel.';
    errorMessage.style.display = 'block';
    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 5000);
}

// Update changeChannel function to use loadChannel
function changeChannel(channelId) {
    if (!isPoweredOn) return;
    
    // Reset retry count when changing channels to interrupt any ongoing retries
    retryCount = 0;
    currentChannelIndex = Object.keys(channels).indexOf(channelId);
    
    const video = document.getElementById('video-player');
    const channelInfo = document.getElementById('channel-info');
    const errorMessage = document.getElementById('error-message');
    const channel = channels[channelId];
    
    errorMessage.style.display = 'none';
    channelInfo.textContent = `${channel.number}. ${channel.name}`;
    channelInfo.style.display = 'block';
    document.title = `${channel.name} - TV`;
    
    video.style.display = 'block';
    
    // Abort any pending operations on the player before loading new channel
    if (shakaPlayer) {
        shakaPlayer.unload().catch(error => {
            console.log('Error unloading previous content:', error);
        });
    }
    
    loadChannel(channelId);
    
    setTimeout(() => {
        channelInfo.style.display = 'none';
    }, 3000);
}

// Initialize when document is loaded
document.addEventListener('DOMContentLoaded', () => {
    initApp();
    // Add a small delay to ensure Shaka Player is fully initialized
    setTimeout(() => {
        const video = document.getElementById('video-player');
        video.volume = currentVolume;
        changeChannel('a2z');
        // Add click event listener for mobile devices
        video.addEventListener('click', () => {
            if (video.paused) {
                video.play();
            }
        });
    }, 1000);
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (shakaPlayer) {
        shakaPlayer.destroy();
    }
});

function showVolumeIndicator(volume) {
    const indicator = document.getElementById('volume-indicator');
    indicator.textContent = `Volume: ${Math.round(volume * 100)}%`;
    indicator.style.display = 'block';
    
    setTimeout(() => {
        indicator.style.display = 'none';
    }, 2000);
}

function adjustVolume(change) {
    if (!isPoweredOn) return;
    
    const video = document.getElementById('video-player');
    currentVolume = Math.max(0, Math.min(1, currentVolume + change));
    video.volume = currentVolume;
    showVolumeIndicator(currentVolume);
}

function toggleFullscreen() {
    const screen = document.querySelector('.screen');
    
    if (!document.fullscreenElement) {
        if (screen.requestFullscreen) {
            screen.requestFullscreen();
        } else if (screen.webkitRequestFullscreen) {
            screen.webkitRequestFullscreen();
        } else if (screen.msRequestFullscreen) {
            screen.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

function inputChannel(number) {
    if (!isPoweredOn) return;
    
    currentChannelInput += number;
    
    const channelInput = document.getElementById('channel-input');
    channelInput.textContent = currentChannelInput;
    channelInput.style.display = 'block';
    
    if (channelInputTimeout) {
        clearTimeout(channelInputTimeout);
    }
    
    channelInputTimeout = setTimeout(() => {
        channelInput.style.display = 'none';
        
        const channelEntry = Object.entries(channels).find(([_, channel]) => 
            channel.number === parseInt(currentChannelInput)
        );
        
        if (channelEntry) {
            changeChannel(channelEntry[0]);
        }
        
        currentChannelInput = "";
    }, 1000);
}

function togglePower() {
    const screen = document.getElementById('tv-screen');
    const video = document.getElementById('video-player');
    const powerBtn = document.querySelector('.remote-power');
    
    isPoweredOn = !isPoweredOn;
    
    if (!isPoweredOn) {
        screen.classList.add('off');
        powerBtn.classList.add('off');
        
        if (shakaPlayer) {
            shakaPlayer.unload();
        }
        video.style.display = 'none';
    } else {
        screen.classList.remove('off');
        powerBtn.classList.remove('off');
        video.style.display = 'block';
        setTimeout(() => changeChannel('tv5hd'), 100); // Auto play TV5 HD when powered on
    }
}

function changeChannelRelative(direction) {
    if (!isPoweredOn) return;
    
    // Reset retry count when changing channels to interrupt any ongoing retries
    retryCount = 0;
    
    // Clear any pending retry timeouts
    if (window.retryTimeout) {
        clearTimeout(window.retryTimeout);
        window.retryTimeout = null;
    }
    
    // Get current channel number
    const currentChannel = Object.values(channels).find((channel, index) => index === currentChannelIndex);
    let nextChannelNumber = currentChannel.number + direction;
    
    // Handle wraparound
    if (nextChannelNumber < 1) nextChannelNumber = 70;
    if (nextChannelNumber > 70) nextChannelNumber = 1;
    
    // Find channel by number
    const nextChannel = Object.entries(channels).find(([_, channel]) => 
        channel.number === nextChannelNumber
    );
    
    if (nextChannel) {
        changeChannel(nextChannel[0]);
    }
}

document.addEventListener('keydown', (e) => {
    if (!isPoweredOn && e.key !== 'p') return;
    
    switch(e.key.toLowerCase()) {
        case 'p':
            togglePower();
            break;
        case 'arrowup':
            changeChannelRelative(1);
            break;
        case 'arrowdown':
            changeChannelRelative(-1);
            break;
        case 'arrowleft':
            adjustVolume(-0.1);
            break;
        case 'arrowright':
            adjustVolume(0.1);
            break;
        case 'm':
            toggleMute();
            break;
        case 'l':
            toggleInterface('channels');
            break;
        case 'r':
            toggleInterface('remote');
            break;
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            inputChannel(parseInt(e.key));
            break;
    }
});

let isMuted = false;
let previousVolume = 1;

function toggleMute() {
    if (!isPoweredOn) return;
    
    const video = document.getElementById('video-player');
    if (isMuted) {
        video.volume = previousVolume;
        currentVolume = previousVolume;
        isMuted = false;
        showVolumeIndicator(currentVolume);
    } else {
        previousVolume = currentVolume;
        video.volume = 0;
        currentVolume = 0;
        isMuted = true;
        showVolumeIndicator(0);
    }
}

document.getElementById('toggle-menu').addEventListener('click', function() {
    const menuOverlay = document.getElementById('menu-overlay');
    menuOverlay.style.display = menuOverlay.style.display === 'none' ? 'block' : 'none';
});

function toggleInterface(type) {
    const channelList = document.getElementById('channel-list');
    const remoteControl = document.getElementById('remote-container');
    const menuOverlay = document.getElementById('menu-overlay');
    const keyboardOverlay = document.getElementById('keyboard-overlay');

    // Hide menu overlay
    menuOverlay.style.display = 'none';

    // Hide all interfaces first
    channelList.classList.remove('visible');
    channelList.style.display = 'none';
    remoteControl.classList.add('hidden');
    keyboardOverlay.style.display = 'none';

    // Show the requested interface
    switch(type) {
        case 'remote':
            remoteControl.classList.remove('hidden');
            break;
        case 'channels':
            channelList.style.display = 'block';
            setTimeout(() => channelList.classList.add('visible'), 10);
            break;
        case 'keyboard':
            keyboardOverlay.style.display = 'block';
            break;
    }
}

function hideInterface(type) {
    const channelList = document.getElementById('channel-list');
    const remoteControl = document.getElementById('remote-container');
    const keyboardOverlay = document.getElementById('keyboard-overlay');

    switch(type) {
        case 'remote':
            remoteControl.classList.add('hidden');
            break;
        case 'channels':
            channelList.classList.remove('visible');
            setTimeout(() => {
                channelList.style.display = 'none';
            }, 300);
            break;
        case 'keyboard':
            keyboardOverlay.style.display = 'none';
            break;
    }
}

// Update click event listener to include keyboard overlay
document.addEventListener('click', (event) => {
    const channelList = document.getElementById('channel-list');
    const remoteControl = document.getElementById('remote-container');
    const menuOverlay = document.getElementById('menu-overlay');
    const keyboardOverlay = document.getElementById('keyboard-overlay');
    const toggleMenuBtn = document.getElementById('toggle-menu');

    if (channelList.style.display !== 'none' && 
        !channelList.contains(event.target) && 
        !toggleMenuBtn.contains(event.target)) {
        hideInterface('channels');
    }

    if (!remoteControl.classList.contains('hidden') && 
        !remoteControl.contains(event.target) && 
        !toggleMenuBtn.contains(event.target)) {
        hideInterface('remote');
    }

    if (menuOverlay.style.display !== 'none' && 
        !menuOverlay.contains(event.target) && 
        !toggleMenuBtn.contains(event.target)) {
        menuOverlay.style.display = 'none';
    }

    if (keyboardOverlay.style.display !== 'none' && 
        !keyboardOverlay.contains(event.target) && 
        !toggleMenuBtn.contains(event.target)) {
        hideInterface('keyboard');
    }
});

// Add click stop propagation for keyboard overlay
document.getElementById('keyboard-overlay').addEventListener('click', (event) => {
    event.stopPropagation();
});

// Prevent clicks inside elements from bubbling up and triggering the hide
document.getElementById('channel-list').addEventListener('click', (event) => {
    event.stopPropagation();
});

document.getElementById('remote-container').addEventListener('click', (event) => {
    event.stopPropagation();
});

document.getElementById('menu-overlay').addEventListener('click', (event) => {
    event.stopPropagation();
});

// Add network status monitoring
window.addEventListener('online', () => {
    if (isPoweredOn) {
        const currentChannelId = Object.keys(channels)[currentChannelIndex];
        changeChannel(currentChannelId); // Retry current channel when connection is restored
    }
});
